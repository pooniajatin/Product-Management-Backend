const mongoose = require('mongoose')

const auth = new mongoose.Schema({
    userId:{
       type:String
    },
    isActivate:{
        type:Boolean
    },
    refreshToken:{
        type:String
    }
})
module.exports = mongoose.model('auth',auth)