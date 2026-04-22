import { upload } from "../config/upload.js";

router.post(
    "/products",
    upload.array("images", 5), // max 5 images
    createProduct
);