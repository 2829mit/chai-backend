import {v2 as cloudinary} from "cloudinary";
import fs from "fs";


    cloudinary.config({ 
        cloud_name: process.env.CLOUDNINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDNINARY_API_KEY, 
        api_secret: process.env.CLOUDNINARY_API_SECRET,  // Click 'View Credentials' below to copy your API secret
    });

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null
      const response = await cloudinary.uploader.upload(localFilePath,{ 
            resource_type:"auto"
        })
        // file uploaded successfully
        // console.log("file is uploaded in cloudinary",response.url);
        fs.unlinkSync(localFilePath)
        return response; 


    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}
export  {uploadOnCloudinary}

const uploadResult = await cloudinary.uploader
.upload(
    'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
        public_id: 'shoes',
    }
)
.catch((error) => {
    console.log(error);
});

console.log(uploadResult);