const userModel = require("../model/Authantication_Model");


const Admin_check_MiddleWare = async (req, res, next) => {
    const userID = req.body.userID;
    const userIsAdmin = await userModel.findOne({ _id: userID });

    if (userIsAdmin?.category == "Admin") {
      next();
    } else {
      res.send({ message: "You are not Authanticated" });
    }
  };
  
  module.exports = Admin_check_MiddleWare;