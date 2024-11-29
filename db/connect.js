const mongoose = require("mongoose");

const connectDB = (url) => {
  // console.log(uri);
  return mongoose.connect(url);
};

module.exports = connectDB;
