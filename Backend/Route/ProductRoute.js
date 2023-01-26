const express = require("express");
const app = express.Router();
const productModel = require("../model/ProductsModel");
const VisitingMiddleware = require("../middleware/RouteChack_Middleware");



app.get("/", async (req, res) => {
  const find = req.query.find;
  const {limit=10,page=1} = req.query;
  try {
    if (find) {
      let products = await productModel.find({
        model: { $regex: find, $options: "i" },
      }).limit(limit).skip(limit*(page-1));
      res.send(products);

    } else {

      let products = await productModel.find().limit(limit).skip((page-1)*limit);
// console.log(products.length)
      res.send(products)
    }
  } 
  catch (e) {
    res.send(e.message);
  }
});



app.get("/filter", async (req, res) => {
  const { brand, RAM, approx_price_EUR, sort } = req.query;
  console.log(sort)
  try {
    if (brand && RAM && approx_price_EUR) {
      if (sort) {
        switch (sort) {
          case "dec": {
            let products = await productModel
              .find({
                brand: { $regex: brand, $options: "i" },
                RAM: { $regex: RAM, $options: "i" },
                approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
              })
              .sort({ approx_price_EUR: -1 });
            return res.send(products);
          }
          case "inc": {
            let products = await productModel
              .find({
            brand: { $regex: brand, $options: "i" },
            RAM: { $regex: RAM, $options: "i" },
            approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
          })
              .sort({ approx_price_EUR: 1 });
            return res.send(products);
          }
          case "asc": {
            let products = await productModel
              .find({
            brand: { $regex: brand, $options: "i" },
            RAM: { $regex: RAM, $options: "i" },
            approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
          })
              .sort({ model: 1 });
            return res.send(products);
          }
          case "desc": {
            let products = await productModel
              .find({
            brand: { $regex: brand, $options: "i" },
            RAM: { $regex: RAM, $options: "i" },
            approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
          })
              .sort({ model: -1 });
            return res.send(products);
          }
        }
      } else {
        let products = await productModel.find({
            brand: { $regex: brand, $options: "i" },
            RAM: { $regex: RAM, $options: "i" },
            approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
          });
        return res.send(products);
      }


    } else if (brand && approx_price_EUR) {
      if (sort) {
        switch (sort) {
          case "dec": {
            let products = await productModel
              .find({
                brand: { $regex: brand, $options: "i" },
                approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
              })
              .sort({ approx_price_EUR: -1 });
            return res.send(products);
          }
          case "inc": {
            let products = await productModel
              .find({
                brand: { $regex: brand, $options: "i" },
                approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
              })
              .sort({ approx_price_EUR: 1 });
            return res.send(products);
          }
          case "asc": {
            let products = await productModel
              .find({
                brand: { $regex: brand, $options: "i" },
                approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
              })
              .sort({ model: 1 });
            return res.send(products);
          }
          case "desc": {
            let products = await productModel
              .find({
                brand: { $regex: brand, $options: "i" },
                approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
              })
              .sort({ model: -1 });
            return res.send(products);
          }
        }
      } else {
        let products = await productModel.find({
            brand: { $regex: brand, $options: "i" },
            approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
          });
        return res.send(products);
      }



    } 
    

    else if (RAM && approx_price_EUR) {
      
      if (sort) {
        switch (sort) {
          case "dec": {
            let products = await productModel
              .find({
                RAM: { $regex: RAM, $options: "i" },
                approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
              })
              .sort({ approx_price_EUR: -1 });
            return res.send(products);
          }
          case "inc": {
            let products = await productModel
              .find({
                RAM: { $regex: RAM, $options: "i" },
                approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
              })
              .sort({ approx_price_EUR: 1 });
            return res.send(products);
          }
          case "asc": {
            let products = await productModel
              .find({
                RAM: { $regex: RAM, $options: "i" },
                approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
              })
              .sort({ model: 1 });
            return res.send(products);
          }
          case "desc": {
            let products = await productModel
              .find({
                RAM: { $regex: RAM, $options: "i" },
                approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
              })
              .sort({ model: -1 });
            return res.send(products);
          }
        }
      } else {
        let products = await productModel.find({
            RAM: { $regex: RAM, $options: "i" },
            approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
          });
        return res.send(products);
      }
    } 
    
    
    else if (brand && RAM) {
      if (sort) {
        switch (sort) {
          case "dec": {
            let products = await productModel
              .find({
                RAM: { $regex: RAM, $options: "i" },
                brand: { $regex: brand, $options: "i" },
              })
              .sort({ approx_price_EUR: -1 });
            return res.send(products);
          }
          case "inc": {
            let products = await productModel
              .find({
                brand: { $regex: brand, $options: "i" },
                RAM: { $regex: RAM, $options: "i" },
              })
              .sort({ approx_price_EUR: 1 });
            return res.send(products);
          }
          case "asc": {
            let products = await productModel
              .find({
                RAM: { $regex: RAM, $options: "i" },
                brand: { $regex: brand, $options: "i" },
              })
              .sort({ model: 1 });
            return res.send(products);
          }
          case "desc": {
            let products = await productModel
              .find({
                RAM: { $regex: RAM, $options: "i" },
                brand: { $regex: brand, $options: "i" },
              })
              .sort({ model: -1 });
            return res.send(products);
          }
        }
      } else {
        let products = await productModel.find({
          RAM: { $regex: RAM, $options: "i" },
          brand: { $regex: brand, $options: "i" },
        });
        return res.send(products);
      }
    } 
    
    
    else {
      if (RAM) {
        if (sort) {
          switch (sort) {
            case "dec": {
              let products = await productModel
                .find({ RAM: { $regex: RAM, $options: "i" } })
                .sort({ approx_price_EUR: -1 });
              return res.send(products);
            }
            case "inc": {
              let products = await productModel
                .find({ RAM: { $regex: RAM, $options: "i" } })
                .sort({ approx_price_EUR: 1 });
              return res.send(products);
            }
            case "asc": {
              let products = await productModel
                .find({ RAM: { $regex: RAM, $options: "i" } })
                .sort({ model: 1 });
              return res.send(products);
            }
            case "desc": {
              let products = await productModel
                .find({ RAM: { $regex: RAM, $options: "i" } })
                .sort({ model: -1 });
              return res.send(products);
            }
          }
        } else {
          let products = await productModel.find({
            RAM: { $regex: RAM, $options: "i" },
          });
          return res.send(products);
        }
      } else if (approx_price_EUR) {
        if (sort) {
          switch (sort) {
            case "dec": {
              let products = await productModel
                .find({
                  approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
                })
                .sort({ approx_price_EUR: -1 });
              return res.send(products);
            }
            case "inc": {
              let products = await productModel
                .find({
                  approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
                })
                .sort({ approx_price_EUR: 1 });
              return res.send(products);
            }
            case "asc": {
              let products = await productModel
                .find({
                  approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
                })
                .sort({ model: 1 });
              return res.send(products);
            }
            case "desc": {
              let products = await productModel
                .find({
                  approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
                })
                .sort({ model: -1 });
              return res.send(products);
            }
          }
        } else {
          let products = await productModel.find({
            approx_price_EUR: { $regex: approx_price_EUR, $options: "i" },
          });
          return res.send(products);
        }
      } else if (brand) {
        if (sort) {
          switch (sort) {
            case "dec": {
              let products = await productModel
                .find({ brand: { $regex: brand, $options: "i" } })
                .sort({ approx_price_EUR: -1 });
              return res.send(products);
            }
            case "inc": {
              let products = await productModel
                .find({ brand: { $regex: brand, $options: "i" } })
                .sort({ approx_price_EUR: 1 });
              return res.send(products);
            }
            case "asc": {
              let products = await productModel
                .find({ brand: { $regex: brand, $options: "i" } })
                .sort({ model: 1 });
              return res.send(products);
            }
            case "desc": {
              let products = await productModel
                .find({ brand: { $regex: brand, $options: "i" } })
                .sort({ model: -1 });
              return res.send(products);
            }
          }
      }else{
            let products = await productModel.find({
              brand: { $regex: brand, $options: "i" },
            });
          
          return res.send(products);
        }
      } else if(sort) {
        switch (sort) {
          case "dec": {
            let products = await productModel
              .find()
              .sort({ approx_price_EUR: -1 });
            return res.send(products);
          }
          case "inc": {
            let products = await productModel
              .find()
              .sort({ approx_price_EUR: 1 });
            return res.send(products);
          }
          case "asc": {
            let products = await productModel
              .find()
              .sort({ model: 1 });
            return res.send(products);
          }
          case "desc": {
            let products = await productModel
              .find()
              .sort({ model: -1 });
            return res.send(products);
          }
          }
          }


        
    }

  } catch (e) {
    res.send(e.message);
  }
});




// app.use(VisitingMiddleware)
app.get("/:id",VisitingMiddleware, async (req, res) => {
  const _id = req.params.id;
  try {
    let products = await productModel.find({ _id });
    res.send(products);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = app;
