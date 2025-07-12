import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose";
import userRoute from "./src/routes/userRoutes.js";
import orderRoute from "./src/routes/orderRoutes.js";
dotenv.config();
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use('/api/users', userRoute);
app.use('/api/orders', orderRoute);

mongoose.connect(`${process.env.MONGO_URI}test-AquaQuick`)
.then(()=>{
    console.log("mongo connected successfully");
})
.catch((err)=>{
 console.log(err, "mongo connection failed");
})


app.listen(3000, (req,res)=>{
    console.log("app is running on port 3000");
})