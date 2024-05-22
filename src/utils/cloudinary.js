import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null

        // upload file on cloudinary
        const response = cloudinary.uploader.upload(localFilePath, {  //isko print kara k dekhna
            resource_type: "auto"
        } )


        // file has been uploaded successfull
        console.log("file is uploaded on clodinary", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the loaclly saved temporary file as the upload operation got fialed 
        return null;
    }
}

export {uploadOnCloudinary}