

const RouteCheckMiddleWare= (req,res,next)=>{
//    const route= req._parsedUrl
const id= req.params.id
//    console.log(req._parsedUrl.href)
try{
   
    next()
    console.log(id,"inside middleware")
    //  console.log(route)
    
}catch(e){    
    res.send({message:"Login first"})
}
                      
       
}
module.exports = RouteCheckMiddleWare