import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();
//console.log('Cloudinary Env Vars:', process.env.CLOUD_NAME, process.env.API_KEY, process.env.API_SECRET);

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})


const uploadToCloud= async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            folder: 'AquaQuick',
            transformation: { width: 400, height: 400, crop: 'fill' }
        })
        fs.unlinkSync(localFilePath)
        console.log(` 'File uploaded and resized successfully.'`)
        return response;
    } 
    catch (error) {
        console.error(error, "aa rha h")
        return null;
    }
    
}

export default uploadToCloud;