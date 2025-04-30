import express from "express"
import { register, login , generateOTP, resetPassword, getAllUsers} from "../controllers/userController.js";
import {upload } from "../middlewares/multer.middleware.js";

const userRoute=express.Router();

userRoute.get('/',(req,res)=>{
    res.send("app in running");

})
userRoute.post('/register', upload.fields([
    { name: 'avatar', maxCount: 1 }
]) ,register);
userRoute.post('/login', login);

userRoute.post('/generateOtp', generateOTP);

userRoute.post('/resetPassword', resetPassword);
userRoute.get('/getAllUsers', getAllUsers);



export default userRoute;