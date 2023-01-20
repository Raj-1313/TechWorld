const express = require("express");
const productModel = require("../model/ProductsModel");
const app = express.Router();
const RatingModel = require("../model/Review.model");

app.get("/:id", async (req, res) => {
  const productID = req.params.id; 
try{
    const createdReview = await RatingModel.find({productID},{userID:0});
    res.send(createdReview);
}
catch(e){
    res.send(e.message)
}
});


app.post("/", async (req, res) => {
  const { productID, userName, rating, comment,userID } = req.body;
  const review = {
    userName,
    rating,
    comment,
    userID
  };

  const ifReviewIDexist = await RatingModel.find({ productID });

  if (ifReviewIDexist.length > 0) {
    const updatedReview = await RatingModel.findByIdAndUpdate(
      { _id: ifReviewIDexist[0]._id },
      { $push: { reviews: review } }
    );

    res.send(updatedReview);
  } else {
    const createdReview = await RatingModel.create({
      productID,
      reviews: review,
    });
    res.send(createdReview);
  }
});

module.exports = app;
