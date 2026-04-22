// Product Routes for Products API

import express from "express";
import {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", upload.array("images", 5), createProduct); // admin
router.patch("/:id", updateProduct); // admin
router.delete("/:id", deleteProduct); // admin

export default router;