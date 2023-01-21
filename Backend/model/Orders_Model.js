const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  productDetails: [
    {productID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    },
    count:{type:Number,required:true}
    },
  ],
  userID: {
    type: String,
    require: true,
  }
});

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;
