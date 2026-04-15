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

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProduct); // admin
router.patch("/products/:id", updateProduct); // admin
router.delete("/products/:id", deleteProduct); // admin

export default router;