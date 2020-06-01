var express = require('express')
var router = express.Router();
const{login,signup,signout}=require("../controllers/auth")

// router.get("/signout",signout)
router.post("/signup",signup);
router.post("/login",login)
router.get("/signout",signout)

module.exports=router;






















