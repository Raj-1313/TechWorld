const mongoose = require('mongoose')


const VisitedSchema= mongoose.Schema({        
    productID:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    }],
    userID:{
        type:String,
        require:true,
    }
})


const VisitedModel  = mongoose.model('visitedProduct',VisitedSchema)

module.exports = VisitedModel;