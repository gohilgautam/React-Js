const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// Check if Cloudinary credentials are configured
const hasCloudinaryCredentials =
    process.env.CLOUD_NAME &&
    process.env.API_KEY &&
    process.env.API_SECRET;

let storage;

if (hasCloudinaryCredentials) {
    // Use Cloudinary storage if credentials are available
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
    });

    storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
            folder: "Car-Management",
            allowed_formats: ["jpeg", "png", "jpg"]
        },
    });

    console.log("✅ Cloudinary storage configured successfully");
} else {
    // Fallback to memory storage if Cloudinary is not configured
    console.warn("⚠️  Cloudinary credentials not found in .env file");
    console.warn("⚠️  Using memory storage (images won't persist on server restart)");
    console.warn("⚠️  Add API_SECRET to .env to enable Cloudinary uploads");

    storage = multer.memoryStorage();
}

module.exports = {
    storage,
    hasCloudinaryCredentials
}   