const Auth_Sign = require("../model/Authantication_Model");
const express = require("express");
const jwt = require("jsonwebtoken");
const App = express.Router();
const bcrypt = require("bcrypt");

App.post("/signup", async (req, res) => {
  const { email, password, name, country, mobile, gender } = req.body;
  const regExp = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,8}/g;
  try {
    const userEmail = await Auth_Sign.findOne({ email });

    if (userEmail) {
      return res.send("User already exists");
    } else if (regExp.test(email)) {
      bcrypt.hash(password, 3, async (err, secure) => {
        if (err) {
          console.log(err);
        } else {
          const User = await Auth_Sign.create({
            email,
            password: secure,
            name,
            country,
            mobile,
            gender,
          });

          return res.status(201).send({ message: "Successfull" });
        }
      });
    } else {
      return res.status(403).send({ message: "InCoreect Email" });
    }
  } catch (e) {
    return res.send({ message: "404 error Url is not working" });
  }
});

App.post("/login", async (req, res) => {
  const { email, password } = req.body;
      try {
    const User = await Auth_Sign.find({ email });  
    if (User.length > 0) {
     bcrypt.compare(password, User[0].password, function(err, result){
            
        if (err) {
          console.log(err);
        } else {
          let token =jwt.sign(
            {
              email,
              userID: User[0]._id,
            },
            process.env.key,
            {
              expiresIn: "10 day",
            }
          );
          return  res.send({token});
        }
      });
    }else{
      return  res.send("Signup Please");
    }


  } catch (e) {
    return res.status(400).send("404 error");
  }
});

module.exports = App;
