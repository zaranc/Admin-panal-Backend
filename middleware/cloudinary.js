const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dv0gzgfcz",
  api_key: "367987572452686",
  api_secret: "eN732N9UqFITzOSyi60p0j2k-ys",
});

let uploadImage = async (path) => {
  try {
    let result = await cloudinary.uploader.upload(path, { public_id: "custom_public_id" });
    return result;
  } catch (error) {
    throw new Error(`Failed to upload image: ${error.message}`);
  }
};

module.exports = uploadImage;

