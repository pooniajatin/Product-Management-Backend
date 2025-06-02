const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: {
    type: String,
    required: [true],
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide a Password"],
    minlength: 6,
  },
});
module.exports = mongoose.model('user',user);
