let mongoose = require("mongoose");

let connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("database connected succefully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
