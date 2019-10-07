const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name:{
    type:String,
    reqired: true
  },
  email:{
    type:String,
    reqired: true,
    unique: true
  },
  password:{
    type:String,
    reqired: true
  },
  date:{
    type:Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', UserSchema)