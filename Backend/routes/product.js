var express = require("express");
var router = express.Router();
const {
  getProductById,
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const { getCategoryById } = require("../controllers/category");
//params
router.param("userId", getUserById);
router.param("productId", getProductById);
router.param("categoryId", getCategoryById);

//actual routes
//create //protected routes
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);
//read
router.get(
  "/product/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAllProduct
);
//update
router.get(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getProductById
);

//update
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);
//delete
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);

module.exports = router;
