require("dotenv").config();
const jwt= require('jsonwebtoken');

const AuthMiddle= (req,res,next)=>{
    const token =req.headers.authorization
    if(token){
       const decodedPassword= jwt.verify(token,process.env.key)
    //    console.log(decodedPassword)
       if(decodedPassword){
       
            const userID = decodedPassword.userID
            req.body.userID = userID;
            next()
       }else{
        res.send({message:"Login first"})
    }
}else{    
    res.send({message:"Login first"})
}
                         
                      
       
}
module.exports = AuthMiddle