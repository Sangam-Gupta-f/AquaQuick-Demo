import express from 'express';
import { getAllOrders, getUserOrders, createOrder, updateOrderStatus } from '../controllers/orderController.js';

const orderRoute=express.Router();

orderRoute.route('/').post(createOrder);
orderRoute.route('/getAllOrders').get(getAllOrders);
orderRoute.route('/getUserOrders/:id').get(getUserOrders);
orderRoute.route('/update/:id').put(updateOrderStatus);


export default orderRoute;