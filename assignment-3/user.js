const mongoose = require('mongoose')
const validator = require('validator')
//creating amongoose model

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: String,
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,

    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    },
  },
  password: {
    type: String,

    minLength: 5,

    validate(password) {
      if (password.toLowerCase().includes("password"))
        throw new Error("Password not valid!!!");
    },
    required: true,
    trim: true,
  },
});

module.exports = User
