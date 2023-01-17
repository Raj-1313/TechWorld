const express = require("express");
const app = express.Router();
const productModel = require("../model/ProductsModel");
const VisitingMiddleware = require("../middleware/RouteChack_Middleware");


app.get("/",  async (req,res)=>{    
    const find = req.query.find
    try{
        if(find){
            let products = await productModel.find( { model : { $regex:find, $options:"i" } } )
            res.send(products);
    }else{
      let products = await productModel.find();
      res.send(products);
    }
}
catch(e){
    res.send(e.message)
}
})





app.get("/filter" , async (req,res)=>{    
    const {brand,RAM,approx_price_EUR} = req.query
    try{
        if(brand && RAM && approx_price_EUR){
            let products = await productModel.find({brand,RAM, approx_price_EUR})
            res.send(products)
        }else if(brand && approx_price_EUR){
            let products = await productModel.find({brand, approx_price_EUR})
            console.log(products.length)
            res.send(products)
        }else if(RAM && approx_price_EUR){
            let products = await productModel.find({RAM, approx_price_EUR})
            res.send(products)
        }else if(brand && RAM ){
            let products = await productModel.find({brand,RAM})
            res.send(products)
        }else{
            if(RAM){
                let products = await productModel.find({RAM})
                res.send(products)
                
            }else if(approx_price_EUR){
                let products = await productModel.find({approx_price_EUR})
                res.send(products)
                
            }else if(brand){
                let products = await productModel.find({brand})
                res.send(products)

            }
        }
            
    }
    catch(e){
        res.send(e.message)
    }
})



// app.use(VisitingMiddleware)
app.get("/:id",VisitingMiddleware , async (req,res)=>{    
    const _id = req.params.id
    try{
      let products = await productModel.find( { _id } )
          res.send(products);   
    }
    catch(e){
        res.send(e.message)
    }
})



module.exports= app