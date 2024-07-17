let jwt = require("jsonwebtoken");

let createToken = (data) => {
  return (token = jwt.sign(data, process.env.JWT_SECRET));
};

let isLogin = (req, res, next) => {
  try {
    let token = req.cookies["token"];
    if (!token) {
      throw new Error("User Not Login");
    }
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};



module.exports = { createToken, isLogin };
