const mongoose = require('mongoose')

const AuthSchema= mongoose.Schema({        
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    category:{
            type:String,
            default:"User"
    },
    gender:{
            type:String,            
    }
})


const authModel  = mongoose.model('authanticate',AuthSchema)

module.exports = authModel;