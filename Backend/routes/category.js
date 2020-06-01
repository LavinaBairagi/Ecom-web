

var express = require("express"); //routes bnana h to y dono must h
var router = express.Router();

var {
  createCategory,
  updateCategory,
  getCategory,
  deleteCategory,
  getCategoryById,
  getAllCategory,
} = require("../controllers/category");

const { isSignedIn,
   isAuthenticated,
    isAdmin } = require("../controllers/auth"); //admin km krga isly usko include kr rhe

const { getUserById } = require("../controllers/user");

//router,aparam(name,callback)
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

//create
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);
//read
router.get("/category/:categoryId", getCategory);
router.get("/categories", 
// isSignedIn,
//  isAuthenticated,
//  isAdmin,
  getAllCategory); //isAdmin,

//update
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
); //srf admin updte kre

//delete
router.delete(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteCategory
);

module.exports = router;
