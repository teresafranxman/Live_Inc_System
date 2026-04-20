// Order Routes for Order API

import express from "express";
import { getOrder, createOrder } from "../controllers/orderController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getOrder); // autheticate
router.post("/", createOrder); // autheticate

export default router;