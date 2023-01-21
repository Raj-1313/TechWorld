const express = require('express');

const mostVisitedProduct= express.Router();
const Admin_check_MiddleWare =require("../middleware/Admin_CheckMiddleware");
const visitedProduct= require("../model/VisitedProduct_model");

mostVisitedProduct.use(Admin_check_MiddleWare);

mostVisitedProduct.get("/",async (req,res)=>{
    const userID=req.body.userID;
    try{

        const product = await visitedProduct.find({},{productID:1,_id:0}).populate("productID","model brand");
        const count = await visitedProduct.find({},{productCount:1,_id:0})
         
        res.send({product,count})
    }
    catch(e){
        res.send({message:e.message})
    }
})


module.exports = mostVisitedProduct;