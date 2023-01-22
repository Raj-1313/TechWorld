const express = require('express')
const app = express.Router()
const CartModel= require('../model/CartModel')
const OrderModel = require('../model/Orders_Model')
const authModel = require('../model/Authantication_Model')




app.get("/" ,async(req,res)=>{
    const userID = req.body.userID
    try{
        
        const prod= await CartModel.find({userID}).populate("productID")  
        if(prod.length>0){
            // console.log(prod)
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
             
        const prod= await CartModel.find({userID}).populate("productID")  
             return res.send({data:prod,message:"Added product"})
            }else{
                const newProd= await CartModel.create({userID,productID})
                const prod= await CartModel.find({userID}).populate("productID")  
                return res.send({data:prod,message:"Added product"})
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
            if(prod[0]?.count==1){
                const rest= await  CartModel.findByIdAndDelete({_id:prod[0]._id})
                const prod= await CartModel.find({userID}).populate("productID")  
                return res.send({data:prod,message:"Added product"})
                
            }else{

                const updatedProd= await CartModel.updateOne({userID,productID},{$inc:{"count":-1}},{new:true})
                const prod= await CartModel.find({userID}).populate("productID")  
                return res.send({data:prod,message:"product removed"})
                
            }
           }else{               
               return res.send({message:"No product found"})
           }
       }catch(err){
           res.send(err.message)
       }
})




app.delete("/:id", async (req,res)=>{  
    let _id= req.params.id
    const {userID}= req.body    
    try{
        const rest= await  CartModel.findByIdAndDelete({_id})
        const prod= await CartModel.find({userID}).populate("productID")  
        return res.send({data:prod,message:"Product deleted Successfullly"})
    }catch(err){
        return res.send(err.message)
    }        
})


app.get("/payment/orders",async(req,res)=>{
    const userID= req.body.userID    
    try{           
         const sendToOrders= await OrderModel.find({userID}).populate("userID").populate({path:"productDetails.productID",model: 'product' }).exec()      
         res.send(sendToOrders)           
      }catch(e){
      res.send({message:e.message})
      }
})

app.post("/payment",async(req,res)=>{
    const { userID,lastname,country,address,city,state,postal_code} = req.body;
    // console.log(userID)
  try{
    const finduserInCart= await CartModel.find({userID})
       
    if(finduserInCart.length>0){
     // agr user me data km ho to or add hojayega
      const updateDetailsUser= await authModel.findByIdAndUpdate({_id:finduserInCart[0]._id},{lastname,address,city,state,postal_code,country})
  
      console.log(updateDetailsUser)
     // paymennt add krna or schemma bnana
     const PaymentDoneProduct= await CartModel.find({userID},{productID:1,count:1,_id:0})     
     // payed data collect kr ke alg set ho rha h
     const sendToOrders= await OrderModel.create({productDetails:PaymentDoneProduct,userID}) 
  
     // cart empty ho rhi h
     const cartData= await CartModel.deleteMany({userID})
     res.send(cartData)
    }else{
     res.send({message:"Add Products first"})
    }
  
  }catch(e){
  res.send({message:e.message})
  }
  })



module.exports= app