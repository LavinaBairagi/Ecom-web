const { check, validationResult } = require("express-validator/check");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const order = require("../models/order");
require("dotenv").config();

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      // console.log(user)
      return res.status(400).json({
        error: "No USER FOUnd in DB",
      });
    }
    req.profile = user;
    // console.log(req.profile);
    next();
  });
};

exports.getUser = (req, res) => {
  //wapis aaynge
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;

  return res.json(req.profile);
};


exports.orderList=(req,res)=>{
order.find({user:req.profile._id})
.populate("user")
  e((err,order)=>{
  if(err){
    return res.status(400).json({
      error:"cant order"
    })
  }
  res.json(order)
})
};
