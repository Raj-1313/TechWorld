const Auth_Sign = require("../model/Authantication_Model");
const express = require("express");
const jwt = require("jsonwebtoken");
const App = express.Router();
const argon2 =require("argon2")

App.post("/signup", async (req, res) => {
  const { email, password, name, country, mobile, gender } = req.body;
  const regExp = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,8}/g;
  const userEmail = await Auth_Sign.findOne({ email });
  
  try {
    if (userEmail) {
      return res.send("User already exists");
    } else if (regExp.test(email)) {
      
      const hash= await argon2.hash(password)

          const User = await Auth_Sign.create({
            email,
            password:hash,
            name,
            country,
            mobile,
            gender,
          });

          return res.status(201).send({ message: "Successfull" });
        
    } else {
      return res.status(403).send({ message: "Passowrd need to be stronger" });
    }
  } catch (e) {
    return res.send({ message: "404 error Url is not working" });
  }
});

App.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const User = await Auth_Sign.findOne({ email });
  try {
    console.log(User)
    
    if (await argon2.verify(User.password,password)){
          let token = jwt.sign(
            {
              email,
              userID: User._id,
            },
            process.env.key,
            {
              expiresIn: "10 day",
            }
          );
          console.log(User)
          // req.body.userID = User._id;
          return res.send({ token,category:User.category,name:User.name,email:User.email });

      
    } else {
      return res.send("Invalid credentials");
    }
  } catch (e) {
    return res.status(401).send({message:e.message});
  }
});

module.exports = App;
