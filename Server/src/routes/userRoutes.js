import express from "express"
import { googleLogin } from "../controllers/userController.js";
const userRoute=express.Router();

userRoute.get('/',(req,res)=>{
    res.send("app in running");

})
userRoute.post('/google-login', googleLogin);



export default userRoute;