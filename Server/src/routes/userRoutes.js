import express from "express"
import { register, login } from "../controllers/userController.js";
const userRoute=express.Router();

userRoute.get('/',(req,res)=>{
    res.send("app in running");

})
userRoute.post('/register', register);
userRoute.post('/login', login);



export default userRoute;