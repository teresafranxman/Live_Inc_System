// Order Routes for Order API

import express from "express";
import { getOrder, createOrder } from "../controllers/orderController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", createOrder); // autheticate
router.get("/", getOrder); // autheticate

export default router;