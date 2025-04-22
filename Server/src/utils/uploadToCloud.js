import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
console.log('Cloudinary Env Vars:', process.env.CLOUD_NAME, process.env.API_KEY, process.env.API_SECRET);

cloudinary.config({
    cloud_name:"do021cjp7",
    api_key:"558962364734443",
    api_secret:"vVSXUWHuUPuqs4buCRHb5jspk70"
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