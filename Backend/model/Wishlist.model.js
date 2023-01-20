const mongoose = require('mongoose')


const WishlistSchema= mongoose.Schema({        
    productID:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    }],
    userID:{
        type:String,
        require:true,
    }
    
})


const WishlistModel  = mongoose.model('cart',WishlistSchema)

module.exports = WishlistModel;