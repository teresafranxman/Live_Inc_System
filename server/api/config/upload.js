import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const ProductName = req.body.ProductName; // or slug

        const uploadPath = `api/uploads/${ProductName}`;

        // Create folder if it doesn't exist
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        cb(null, uploadPath);
    },

    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
});

export const upload = multer({ storage });