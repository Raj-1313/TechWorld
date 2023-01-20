const express = require('express')
const app = express.Router()
const WishlistModel= require('../model/Wishlist.model')




app.get("/" ,async(req,res)=>{
    const userID = req.body.userID
    try{
        const prod= await WishlistModel.find({userID}).populate("productID")  
        if(prod.length>0){
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
         const prod= await WishlistModel.find({userID,productID})       
         if(prod.length>0){
                 return res.send({message:"Product Already Exist"})
            }else{
                const newProd= await WishlistModel.create({userID,productID})
                  return res.send(newProd)
            }
        }catch(err){
            res.send(err.message)
        }
})
       

app.delete("/:id", async (req,res)=>{  
    let _id= req.params.id
    try{
        const rest= await  WishlistModel.findByIdAndDelete({_id})
        return res.send("Product removes from Wishlist")
    }catch(err){
        return res.send(err.message)
    }        
})


module.exports= app