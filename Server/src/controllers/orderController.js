import { Order } from "../models/OrderModel.js";
import { User } from "../models/UserModel.js";
//Create order
const createOrder=async (req, res)=>{
   try {
    const order = new Order(req.body);
    const saved = await order.save();
    res.status(201).json(saved);
   } catch (error) {
     res.status(400).json({err:error.message});
   }
}

//getOrder for user
const getUserOrders=async (req, res)=>{
    try {
     const order = await Order.find({user:req.params.id}).sort({createdAt:-1});
     res.json(order);
    } catch (error) {
      res.status(400).json({err:error.message});
    }
 }

 //getAlloreder (Admin)
 const getAllOrders=async (req, res)=>{
    try {
     const orders = await Order.find().populate('user').sort({crratedAt:-1});
     res.json(orders);
    } catch (error) {
      res.status(400).json({err:error.message});
    }
 }

 //update order

const updateOrderStatus=async(req, res)=>{
    try {
        const order=await Order.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status},
            {new:true}
        );
        res.json(order);
    } catch (error) {
        res.status(400).json({err:error.message});
    }
} 



export {createOrder, getUserOrders, getAllOrders , updateOrderStatus};