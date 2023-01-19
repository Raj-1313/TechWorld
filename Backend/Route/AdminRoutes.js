const express = require("express");
const app = express.Router();
const productModel = require("../model/ProductsModel");
const userModel = require("../model/Authantication_Model");

const Admin_check_MiddleWare= async (req,res,next)=>
{
const userID = req.body.userID;
const userIsAdmin= await userModel.findOne({_id:userID});

if(userIsAdmin.category=="Admin"){
  next()
}else{
  res.send({message:"You are not Authanticated"})
}
}

app.use(Admin_check_MiddleWare);

app.get("/", async (req, res) => {
  // destructure page and limit and set default values
  const { page = 1, limit = 20 } = req.query;
  // console.log(page, limit);

  try {

if(find){  

  const products = await productModel.find({model:{ $regex: find, $options: "i" } })
  .limit(limit)
  .skip((page - 1) * limit)
  .exec();
  const count = await productModel.countDocuments();
  res.json({products,count,totalPages: Math.ceil(count / limit), currentPage: page});

}else{

  const products = await productModel.find().limit(limit).skip((page - 1) * limit).exec();  
  const count = await productModel.countDocuments();
  res.json({products,count,totalPages: Math.ceil(count / limit),currentPage: page});

}
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



// user data

app.get("/user", async (req, res) => {
  const {userID} = req.body;
  const find = req.query.find;
  const { limit = 14, page = 1 } = req.query;
  
  try {
    if(find){
      const users = await userModel.find({name: { $regex: find, $options: "i" } },{password:0},{_id:{$nin:userID}}
      ).limit(limit).skip(limit * (page - 1));
      console.log(users)
      res.send(users);
    }else{

      const users = await userModel.find({ _id:{$nin:userID} },{password:0}).limit(limit).skip(limit * (page - 1));
      res.send(users);
    }
    } catch (e) {
    res.send(e.message);
  }
});

app.patch("/user/:id", async (req, res) => {
  const data = req.body;
  const _id = req.params.id;
  try {
    const obj = await userModel.findByIdAndUpdate({ _id }, data);
    res.send("data updated");
  } catch (e) {
    res.send(e.message);
  }
});

app.delete("/user/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const obj = await userModel.findByIdAndDelete({ _id });
    res.send("data delted");
  } catch (e) {
    res.send(e.message);
  }
});



module.exports = app;
