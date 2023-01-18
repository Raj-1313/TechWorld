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
// middleware
const AuthMiddleware = require('./middleware/Auth_Middleware');
const app = express();


app.use(express.json());
app.use(cors());
app.use("/auth",AuthRoute)

app.use(AuthMiddleware)

app.use("/product",productRoute)
app.use("/cart",CartRoute)


app.use("/admin",AdminRoute)
app.use("/review",ReviewRoute)





app.get('/',(req,res) => {
res.send("I an onn")
})



app.listen(process.env.PORT , async ( ) => {
    try{
        await connect()
    console.log("listning on port 8080")
    }catch(e){
        console.log(e.message)
    }
})