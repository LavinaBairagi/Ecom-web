var express = require("express");
var router = express.Router();
const { login } = require("../controllers/user");

const { getUserById,orderList } = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
// router.get("/signout",signout);

// module.exports=router;


router.param("userId", getUserById);
router.get("/user/:userId", isSignedIn, isAuthenticated, isAdmin);
router.post("/order/:userId", isSignedIn, isAuthenticated, isAdmin,orderList)
module.exports = router;
