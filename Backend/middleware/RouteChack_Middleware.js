
const RouteCheckMiddleWare= (req,res,next)=>{
const id= req.params.id
try{
   
    next()
    console.log(id,"inside middleware")
    //  console.log(route)
    
}catch(e){    
    res.send({message:"Login first"})
}
                      
       
}
module.exports = RouteCheckMiddleWare