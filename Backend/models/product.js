// var mongoose = require("mongoose");
// const{ObjectId}= mongoose.Schema
// var productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: true,
//     maxlength: 32,
//   },
//   description : {
//     type: String,
//     required: true,
//     maxlength: 2000,
//   },
//   photo: {
//     type: Buffer,
//     required: true,
//     trim: true,
//   },
//   category: {
//     type: ObjectId,
//     ref:"Category",
//     trim: true,
//     required : true
//   },
// //   stock :{
// // type : number,
// // required : true
// //   },
//   description: {
//     type: String,
//     trim: true,
//     required :true
//   },
//   price : {
//     type : Number,
//     required : true,
//     maxlength :10,
//     trim : true
//   },
//   rating: {
//     type: number
//   }
// },
 
// {timestamps : true},
 
  
// );
// exports.mongoose.model('Product', productSchema);

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000
    },
    price: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true
    },
    category: {
      
      type: ObjectId,
      ref: "Category",
      required: true
    },
    stock: {
      type: Number
    },
    sold: {
      type: Number,
      default: 0
    },
    photo: {
      data: Buffer,
      contentType: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
