const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

//get product by Id
exports.getProductById = (req, res, next, id) => {
  Product.findById(id)
    .populate("category") ///it makes relational db
    .exec((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "Product not found",
        });
      }
      req.product = product;
      next();
    });
};

///create product
exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fileds, file) => {
    if (err) {
      return rs.status(400).json({
        error: "product with image",
      });
    }
    //restriction on fileds
    const { name, description, price, category, stock } = fileds;
    if (!name || !description || !price || !category || !stock)
      return res.status(400).json({
        error: "please include all fileds",
      });
    let product = new Product(fileds);
    //handle file
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "Files size too big",
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }
    product.save((err, product) => {
      if (err) {
        res.status(400).json({
          error: "file is too big",
        });
      }
    });
  });
};

/////get All product
exports.getAllProduct = (req, res) => {
  Product.find().exec((err, product) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    Product.find()
      .select("-photo")
      .populate("category")
      .sort([[sortBy, "asc"]])
      .limit(limit);
    if (err) {
      return res.status(400).json({
        error: "product not found ",
      });
    }
    res.json(product);
    console.log(product);
  });
};

//deleteproduct
exports.deleteProduct = (req, res) => {
  const product = req.product;
  product.remove((err, product) => {
    if (err) {
      return res.status(400).json({
        error: "product cant deleted",
      });
    }
    res.json({
      message: "successfully Deleted",
      product,
    });
  });
};

//updation code

exports.updateProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fileds, file) => {
    if (err) {
      return rs.status(400).json({
        error: "product with image",
      });
    }
    //restriction on fileds

    let product = req.product;
    product = _.extend(product, fileds);
    //handle file
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "Files size too big",
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }
    product.save((err, product) => {
      if (err) {
        res.status(400).json({
          error: "no updation possible",
        });
      }
      res.json(product);
    });
  });
};
