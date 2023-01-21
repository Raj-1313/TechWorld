const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  productDetails: [
    {
      productID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    },
    count:{type:Number,required:true}
    },
  ],
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"authanticate",
    require: true,
  },
  orderStatus:{
    type:String,
    default:"pending",
    enum:["completed","delivered","pending","out of delivery"]
  }
});

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;
