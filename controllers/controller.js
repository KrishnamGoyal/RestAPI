const User = require("../models/user");

const getAllUsers = async (req, res) => {
  const users = await usersDb();
  res.status(200).json(users);
};

const getAllUsersTesting = async (req, res) => {
  const users = await usersDbTesting();
  res.status(200).json(users);
};

const usersDb = async (arg) => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};

const usersDbTesting = async (arg) => {
  try {
    const users = await User.find({ type: "testing" });
    return users;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers, getAllUsersTesting };
