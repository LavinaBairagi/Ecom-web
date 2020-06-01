

const Category = require("../models/category");
// const db = require("../db");
// const collection = "categories";

exports.getCategoryById = (req, res,next,id) => {
  Category.findById(id).exec((err,cate)=>{
    // console.log(id)
    if(err){
      return res.status(400).json({
        error:"categry nhi mili"
      });
    }
    req.category=cate;
    next();
    console.log(req.category)
  });
};

exports.createCategory = (req, res) => {
  const category = new Category(req.body);
  category.save((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to create category in DB"
      });
    }
    res.json({ category });
  });
};

exports.getCategory = (req, res) => {
  return res.json(req.category);
};

exports.getAllCategory = (req, res) => {
  Category.find().exec((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "categories found nhi ho rhi "
      });
    }
    res.json(categories);
  });
};

exports.updateCategory = (req, res) => {  
   console.log("update")                                    //name unique hoga ctgry ka isly nm se update kr skte h bjy id k
  const category = req.category;      //jo phle se store h
  category.name = req.body.name;      //jo input de rhe

  category.save((err, updatedCategory) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update category"
      });
    }
    res.json(updatedCategory);
  });
};

exports.deleteCategory = (req, res) => {
  const category = req.category;
  category.remove((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "delete nhi hogi j category"
      });
    }
    res.json({
      message: "Successfully deleted"
    });
  });
};







