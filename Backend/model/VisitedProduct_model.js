const mongoose = require('mongoose')


const VisitedSchema= mongoose.Schema({        
    productID:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    }],
    // userID:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"authanticate",
    //     require:true,
    // },
    productCount:{type:Number,default:1}

},{
    versionKey:false,
})




const VisitedModel  = mongoose.model('visitedProduct',VisitedSchema)

module.exports = VisitedModel;