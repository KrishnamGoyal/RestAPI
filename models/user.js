const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must be Provided"],
  },
  age: {
    type: Number,
    required: [true, "Must be Provided"],
  },
  email: {
    type: String,
    required: [true, "Must be Provided"],
  },
  subscription: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    enum: {
      values: ["real", "testing"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("User", usersSchema);
