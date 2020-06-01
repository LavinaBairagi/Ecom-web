const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;
const ProductCartsSchema = new mongoose.Schema({
    product : {
        type : ObjectId,
        ref:"Product"
    },
    name : String,
    count : Number,
    price : Number
})
const ProductCart  = mongoose.model("ProductCart", ProductCartsSchema)


const orderSchema = new mongoose.Schema({
   products :[ProductCartsSchema],  
   transection_id :{},
   amount : {type :Number},
 address : String,
 Updated : Date,
  
user:{
    type : ObjectId,
    ref : "User",
    required : true
},
orderId:{
    type : Number,
    required : true
}
 },

{timestamps:true}
);
const Order = mongoose.model("Order", orderSchema)
// export default mongoose.model("Order",orderSchema);