import { User } from "../models/UserModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const register=async(req,res)=>{
  const {name, email, password, phone, role}=req.body;
  try {
    const exist=await User.findOne({email});
    if(exist)return res.status(400).json({ message: 'Email already registered' });

    const hashPassword=await bcrypt.hash(password,10);
  const newUser=await  User.create({name, email, password : hashPassword, phone, role});

  const token= jwt.sign({id:newUser._id, email: newUser.email, role: newUser.role}, process.env.SECRET_KEY,{ expiresIn: '7d' }
  )

  res.status(200).json({user:newUser, token, message: "user registered"});
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const login=async(req,res)=>{
  const {email, password}=req.body
  try {
    const user=await User.findOne({email});
    if(!user)return res.status().json({message:"User not exist"});

    const decode=await bcrypt.compare(password, user.password);
    if(!decode)return res.status(400).json({ message: "Invalid password" });

     // Generate JWT
     const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: '7d' }
    );

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}

  

export {register, login};  