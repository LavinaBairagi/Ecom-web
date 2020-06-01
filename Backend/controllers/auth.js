
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { check, validationResult } = require('express-validator/check');
const Signupvalidation = require('../validation/signup');
const validateLoginInput = require("../validation/signin");
const jwt = require("express-jwt");
 const User = require("../models/user");
 const user = require("../controllers/user")
 const jwtexpress = require("jsonwebtoken");

exports.signup = (req,res) => {
    const { errors, isValid } = Signupvalidation(req.body);
    if (!isValid) {
          return res.json(errors);
        }
    const user = new User(req.body)
    console.log(user);
    user.save((error,user)=>{
// console.log(error)
        if(error || !user){
            return res.status(400).json({
                err:"Not Able to save user in DB"
            });
        }
        res.json({ 
            name:user.name,
        email:user.email,
    id:user._id })
    });
    
};


///login
exports.login = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }
 
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER email does not exists"
      });
    }

    if (!user.autheticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match"
      });
    }

    //create token
    const token = jwtexpress.sign({ _id: user._id }, process.env.SECRETKEY);
    //put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    //send response to front end
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, name, email, role } });
  });
};



exports.signout = (req, res) => {
  req.cookie.login = false;
  module.exports;
  console.log("you logged out");
};


///protected routesvb
exports.isSignedIn=jwt({
    secret:process.env.SECRETKEY,
userProperty:"auth"
});

//customMiddileware
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED"
    });
  }
  next();
};



exports.isAdmin = (req, res, next) => {
    if (req.profile.role === 0) {
      return res.status(403).json({
        error: "You are not ADMIN, Access denied"
      });
    }
    next();
  };