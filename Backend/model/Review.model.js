const mongoose = require('mongoose')


const ProdReviewSchema= mongoose.Schema({        
    productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
     reviews: [
    {
      userName:{type: String, require: true},
      rating: { type: Number, required: true, },
      comment: { type: String },
      createdAt:{ type: Date, default: Date.now } 
    },
  ],
    
})


const RatingModel  = mongoose.model('rating',ProdReviewSchema)

module.exports = RatingModel;