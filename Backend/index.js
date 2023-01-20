require("dotenv").config();

const express = require('express');
const cors= require('cors');
const connect= require('./config/config');
// Routes
const  productRoute = require('./Route/ProductRoute');
const AuthRoute = require("./Route/Authantication_Route");
const CartRoute = require("./Route/CartRoute");
const AdminRoute = require("./Route/AdminRoutes");
const ReviewRoute = require("./Route/Rating_Route");
const WishlistRoute = require("./Route/Wishliat_Route");
const MostVisitedProduct_Route = require("./Route/MostVisitedProduct_Route");

// middleware
const AuthMiddleware = require('./middleware/Auth_Middleware');
const mostVisitedProduct = require("./Route/MostVisitedProduct_Route");
const app = express();


app.use(express.json());
app.use(cors());
// All
app.use("/auth",AuthRoute)
app.use("/product",productRoute)

app.use(AuthMiddleware)
// Admin
app.use("/admin",AdminRoute)
app.use("/admin/mostvisted",mostVisitedProduct)
app.use("/review",ReviewRoute)


// users
app.use("/cart",CartRoute)
app.use("/wishlist",WishlistRoute)







app.get('/',(req,res) => {
res.send("I an onn")
})




app.listen(process.env.PORT, async () => {
    
    try{
        await connect
    console.log(`listning on port ${process.env.PORT}`)
    }catch(e){
        console.log(e.message)
    }
})