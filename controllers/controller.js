const User = require("../models/user");

const getAllUsers = async (req, res) => {
  const users = await User.find(req.query);
  res.status(200).json(users);
};

const getAllUsersTesting = async (req, res) => {
  const users = await User.find(req.query);
  res.status(200).json(users);
};

module.exports = { getAllUsers, getAllUsersTesting };
