require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db/connect");

const User = require("./models/user");
const usersData = require("./users.json");

const connection = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await User.deleteMany();
    await User.create(usersData);
    mongoose.disconnect();
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

connection();
