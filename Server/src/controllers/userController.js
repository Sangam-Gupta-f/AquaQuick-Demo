import { User } from "../models/UserModel.js";
import admin from "firebase-admin"


admin.initializeApp({
    credential: admin.credential.applicationDefault() // Or use serviceAccountKey
  });

// POST /api/users/google-login
const googleLogin = async (req, res) => {
    const { token, name, email } = req.body;
  
    try {
      const decoded = await admin.auth().verifyIdToken(token);
      
      let user = await User.findOne({ email });
      if (!user) {
        user = await User.create({ name, email, phone: '', role: 'user' });
      }
  
      res.status(200).json({ message: "Login success", user });
    } catch (err) {
      res.status(401).json({ error: "Unauthorized", details: err.message });
    }
  };
  

export {googleLogin};  