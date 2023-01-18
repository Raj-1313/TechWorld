const express = require("express");
const app = express.Router();
const productModel = require("../model/ProductsModel");

app.get("/", async (req, res) => {
  // destructure page and limit and set default values
  const { page = 1, limit = 10 } = req.query;
  console.log(page, limit);
  try {
    // execute query with page and limit values
    const products = await productModel
      .find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    // get total documents in the Posts collection
    const count = await productModel.countDocuments();
    // return response with posts, total pages, and current page
    res.json({
      products,
      count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    console.error(err.message);
  }
});
app.post("/", async (req, res) => {
  const data = req.body;
  try {
    const obj = await productModel.create(data);
    res.send("data posted");
  } catch (e) {
    res.send(e.message);
  }
});

app.patch("/:id", async (req, res) => {
  const data = req.body;
  const _id = req.params.id;
  try {
    const obj = await productModel.findByIdAndUpdate({ _id }, data);
    res.send("data updated");
  } catch (e) {
    res.send(e.message);
  }
});

app.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const obj = await productModel.findByIdAndDelete({ _id });
    res.send("data delted");
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = app;

app.get("/", async (req, res) => {
  const data = req.body;
  const { limit = 10, page = 1 } = req.query;
  try {
    const obj = await productModel
      .create(data)
      .limit(limit)
      .skip(limit * (page - 1));
    res.send("data posted");
  } catch (e) {
    res.send(e.message);
  }
});
app.post("/", async (req, res) => {
  const data = req.body;
  try {
    const obj = await productModel.create(data);
    res.send("data posted");
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/", async (req, res) => {
  const data = req.body;
  try {
    const obj = await productModel.create(data);
    res.send("data posted");
  } catch (e) {
    res.send(e.message);
  }
});

app.patch("/:id", async (req, res) => {
  const data = req.body;
  const _id = req.params.id;
  try {
    const obj = await productModel.findByIdAndUpdate({ _id }, data);
    res.send("data updated");
  } catch (e) {
    res.send(e.message);
  }
});

app.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const obj = await productModel.findByIdAndDelete({ _id });
    res.send("data delted");
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = app;
