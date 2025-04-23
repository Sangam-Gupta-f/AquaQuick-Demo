import { User } from "../models/UserModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import uploadToCloud from "../utils/uploadToCloud.js";
import { sendOTPEmail } from "../utils/sendMail.js";


const register=async(req,res)=>{
  const {name, email, password, phone, role}=req.body;
  try {
    const exist=await User.findOne({email});
    if(exist)return res.status(400).json({ message: 'Email already registered' });
    const avatarLocalFilePath=req.files?.avatar[0]?.path;
    if(!avatarLocalFilePath) return res.status(400).json({ message: 'Please upload an avatar' });
    console.log('Uploading avatar at localfile--', avatarLocalFilePath);
    const avatar=await uploadToCloud(avatarLocalFilePath);
    console.log('Uploading avatar to cloudinary', avatar); ///CLoudinary API integration
    console.log(avatar.url);


    const hashPassword=await bcrypt.hash(password,10);
  const newUser=await  User.create({name, email, password : hashPassword, phone, role,avatar:avatar.url });

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

const generateOTP=async(req,res)=>{
  const {email}=req.body;
  try {
    const user=await User.findOne({email});
    if(!user)return res.status(400).json({ message: 'User not exist' });
    const otp=Math.floor(100000 + Math.random() * 900000);
    const otpExpiry = Date.now() + 5 * 60 * 1000; // 5 min

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();
    //send OTP to user email
    await sendOTPEmail(email, otp);
    res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
}  

// POST /api/users/reset-password
 const resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.otp !== otp || Date.now() > user.otpExpiry) {
    return res.status(400).json({ message: 'Invalid or expired OTP' });
  }

  const hashPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashPassword; // hash password
  user.otp = undefined;
  user.otpExpiry = undefined;
  await user.save();

  res.status(200).json({ message: 'Password updated successfully' });
};



export {register, login, resetPassword, generateOTP};  