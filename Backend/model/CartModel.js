const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  productID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  userID: {
    type: String,
    require: true,
  },
  count: {
    type: Number,
    default: 1,
  },
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = CartModel;
