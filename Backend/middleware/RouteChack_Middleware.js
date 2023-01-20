const visitedProduct= require("../model/VisitedProduct_model")


const RouteCheckMiddleWare=async (req,res,next)=>{
const _id= req.params.id
try{   
    // searching of product
    const productExist= await visitedProduct.find({productID:_id})      
    if(productExist?.length>0){           
        await visitedProduct.updateOne({productID:_id},{$inc:{"productCount":1}})        
    }else{
         await visitedProduct.create({productID:_id})           
    }
    
    next()
    
}catch(e){    
    res.send({message:"Login first"})
}
                      
       
}
module.exports = RouteCheckMiddleWare