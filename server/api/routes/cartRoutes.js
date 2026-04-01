// Cart Routes for Cart API

import express from "express";
import {
    getCart,
    createCart,
    updateCart,
    deleteCart
} from "../controllers/cartController.js";

const router = express.Router();

router.get("/:customerId", getCart);
router.post("/", createCart);
router.patch("/:id", updateCart);
router.delete("/:id", deleteCart);

export default router;