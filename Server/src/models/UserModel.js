import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
   name:String,
   email:{type:String, required:true, unique:true},
   phone:{type:String, required: true},
   password: { type: String, required: true },
   role:{type:String, enum:['user','admin'], default:'user'},
   avatar:String,
   
}, {timestamps:true});

export const User=mongoose.model("User", UserSchema);