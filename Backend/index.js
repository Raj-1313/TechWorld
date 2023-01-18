require("dotenv").config();

const express = require('express');
const cors= require('cors');
const connect= require('./config/config');
const  productRoute = require('./Route/ProductRoute');
const app = express();
app.use(express.json());
app.use(cors());
app.use("/product",productRoute)

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