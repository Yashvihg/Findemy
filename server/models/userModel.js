const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: [Object],
    required: true,
  },
  coursesEnrolled: {
    type: [Object],
    required: true,
  },
  faceImageUrl:{
    type: String,
    required: false,
  }
});

const User = mongoose.model("users", userSchema);
module.exports = User;