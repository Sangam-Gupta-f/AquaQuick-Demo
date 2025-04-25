import { Order } from "../models/OrderModel.js";
 import { sendOTPEmail } from "../utils/sendMail.js";
import { User } from "../models/UserModel.js";
//Create order
const createOrder=async (req, res)=>{
  const { user,bottleQuantity } = req.body;
   try {
    const order = new Order({user,bottleQuantity} );
    const saved = await order.save();
    const userData = await User.findById(req.body.user);
    if (userData?.email) {
      await sendOTPEmail(
        userData.email,
        'Order Confirmation - AquaQuick 💧',
        `Hi ${userData.name},\n\nYour order for ${bottleQuantity} bottle(s) has been placed successfully. 🚚💦\n\nThank you for choosing AquaQuick!`
      );
      console.log('Order confirmation email sent ✅');
    }
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