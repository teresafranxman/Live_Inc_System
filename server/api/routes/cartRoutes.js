// Cart Routes for Cart API

import express from "express";
import {
    getCart,
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart,
    checkout
} from "../controllers/cartController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();
// router.use(authenticate);

router.get("/", getCart);
router.post("/add", addToCart);
router.put("/item/:id", updateCartItem);
router.delete("/item/:id", removeCartItem);
router.delete("/clear", clearCart);
router.post("/checkout", checkout);

export default router;