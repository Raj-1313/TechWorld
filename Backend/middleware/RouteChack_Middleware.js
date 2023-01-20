
const RouteCheckMiddleWare= (req,res,next)=>{
const id= req.params.id
try{
   
    next()

    // searching of product
    if(id){
        console.log(id,"inside middleware")
       
    }
    
}catch(e){    
    res.send({message:"Login first"})
}
                      
       
}
module.exports = RouteCheckMiddleWare