const express = require('express')
const  productModel= require('../model/ProductsModel')
const app = express.Router()
const CartModel= require('../model/CartModel')




app.get("/" ,async(req,res)=>{
    const userID = req.body.userID
    try{
        const prod= await CartModel.find({userID}).populate("productID")  
        if(prod.length>0){
            console.log(prod)
          return  res.send(prod)           
        }else{
            return res.send({data:"null"})
        }
       }catch(err){
           res.send(err.message)
       }
})



app.post('/',async (req,res) => {
     const {userID,productID}= req.body    
     try{
         const prod= await CartModel.find({userID,productID})
       
         if(prod.length>0){
             const updatedProd= await CartModel.updateOne({userID,productID},{$inc:{"count":1}},{new:true})
             return res.send(updatedProd)
            }else{
                const newProd= await CartModel.create({userID,productID})
                return res.send(newProd)
            }
        }catch(err){
            res.send(err.message)
        }
})


app.post('/dec',async (req,res) => {    
    const {userID,productID}= req.body   
    try{
        const prod= await CartModel.find({userID,productID})
      
        if(prod.length>0){
            const updatedProd= await CartModel.updateOne({userID,productID},{$inc:{"count":-1}},{new:true})
            return res.send(updatedProd)
           }else{
               
               return res.send(prod)
           }
       }catch(err){
           res.send(err.message)
       }
})




app.delete("/:id", async (req,res)=>{  
    let _id= req.params.id
    try{
        const rest= await  CartModel.findByIdAndDelete({_id})
        return res.send("Product deleted Successfullly")
    }catch(err){
        return res.send(err.message)
    }        
})


module.exports= app