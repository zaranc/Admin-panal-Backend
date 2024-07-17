const { userSchema } = require("../model");

let getUserList = () => {
  return userSchema.find();
};

let duplicate = (email) => {
  return userSchema.findOne({ email });
};

let addUser = (body) => {
  return userSchema.create(body);
};
let loginUser = (email) => {
  return userSchema.findOne({ email: email });
};
let deleteUser = (id) => {
  return userSchema.findByIdAndDelete({ _id: id });
};

let upadteUser = (id, body) => {
  return userSchema.findByIdAndUpdate({ _id: id }, body);
};

module.exports = {
  getUserList,
  duplicate,
  addUser,
  deleteUser,
  upadteUser,
  loginUser,
};
