import mongoose from "mongoose";

const OrderSchema=new mongoose.Schema({
  user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
  bottleQuantity:{type:Number, default:1},
  status:{type:String, enum:['pending', 'assigned', 'delivered'], default:'pending'}
}, {timestamps:true});


export const Order=mongoose.model('Order',OrderSchema);