// Order Routes for Order API

import express from "express";
import { getOrder, createOrder } from "../controllers/orderController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/orders", authenticate, createOrder);
router.get("/orders", authenticate, getOrder);

export default router;