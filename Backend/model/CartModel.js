const mongoose = require('mongoose')


const CartSchema= mongoose.Schema({        
    productID:{
        type:String,
        required:true
    },
    userID:{
        type:String,
        required:true,
    },
    count:{
        type:Number,
        default:1
    }
})


const CartModel  = mongoose.model('cart',CartSchema)

module.exports = CartModel;