const mongoose = require("mongoose");

const connectDB = (uri) => {
  // console.log(uri);
  return mongoose.connect(uri);
};

module.exports = connectDB;
