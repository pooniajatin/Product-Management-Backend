const mongoose = require('mongoose')

const profile = new mongoose.Schema({
    name:{
        type:String,
        required:true
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
  address:{
    type:String
  },
  dob:{
    type: Date
  },
  profilephoto:{
    type:String
  },
  

} ,{timestamps:true})
module.exports = mongoose.model('profile',profile)