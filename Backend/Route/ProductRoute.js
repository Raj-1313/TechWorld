const express = require("express");
const app = express.Router();
const productModel = require("../model/ProductsModel");


app.get("/",  async (req,res)=>{
    console.log(req.body)
    try{
        const data= await productModel.find({model: "one"})
        res.send(data)
    }
    catch(e){
        res.send(e.message)
    }
})

app.post("/", async (req,res)=>{
    const data = req.body
    try{
        const obj= await productModel.create(data)
        res.send("data posted")
    }
    catch(e){
        res.send(e.message)
    }
})
app.patch("/:id", async (req,res)=>{
    const data = req.body
    const _id = req.params.id
    try{
        const obj= await productModel.findByIdAndUpdate({_id})
        res.send("data posted")
    }
    catch(e){
        res.send(e.message)
    }
})
app.delete("/:id", async (req,res)=>{
    const _id = req.params.id
    try{
        const obj= await productModel.findByIdAndDelete({_id})
        res.send("data delted")
    }
    catch(e){
        res.send(e.message)
    }
})


module.exports= app