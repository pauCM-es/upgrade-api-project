const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "Password is required"]      
    },
    alias: {
      type: String,
      unique: true
    },
    printer_model: {
      type: String,
    },
  }
)

const User = mongoose.model("users", userSchema);
module.exports = User