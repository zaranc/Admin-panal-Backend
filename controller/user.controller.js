const { createToken } = require("../middleware/auth");
const uploadImage = require("../middleware/cloudinary");
const { userService } = require("../service");


let addUser = async (req, res) => {
  try {
    let body = req.body;
    let file = req.file;

    let duplicateUser = await userService.duplicate(body.email)
    if (duplicateUser) {
      throw new Error("User already exists")
    }

    let img = await uploadImage(file.path);
    let finalData = {
      ...body,
      profile: img.url
    }

    let result = await userService.addUser(finalData);
    res.status(201).json({
      status: "user created successfully",
      data: result,
    });


  } catch (error) {
    res.status(500).json({
      status: "Failed to create user",
      error: error.message,
    });
  }
};

let loginUser = async (req, res) => {
  try {
    let body = req.body;
    let result = await userService.loginUser(body.email);
    if (!result) {
      throw new Error("User not found");
    }
    if (result.password !== body.password) {
      throw new Error("Password is incorrect");
    }
    let token = createToken({ result })
    res.cookie("token", token);
    res.status(200).json({
      status: "user login successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to login user",
      error: error.message,
    });
  }
};

let getUserList = async (req, res) => {
  try {
    let result = await userService.getUserList();

    if (!result) {
      throw new Error("Something Went Wrong");
    }
    res.status(200).json({
      status: "user get succefully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to get user",
      error: error.message,
    });
  }
};

let deleteUser = async (req, res) => {
  try {
    let { id } = req.params;
    console.log("🚀 ~ deleteUser ~ id:", id);
    let result = await userService.deleteUser(id);

    if (!result) {
      throw new Error("User not found");
    }
    res.status(200).json({
      message: "User deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

let updateUser = async (req, res) => {
  try {
    let body = req.body;
    let { id } = req.params;

    let result = await userService.upadteUser(id, body);
    if (!result) {
      throw new Error("User not found");
    }
    res.status(200).json({
      message: "Product updated successfully",
      data: body,
      oldData: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getUserList, addUser, deleteUser, updateUser, loginUser };
