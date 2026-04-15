// Customer Routes for Customers API

import express from "express";
import {
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
} from "../controllers/customerController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticate, getCustomers); // admin
router.get("/:id", authenticate, getCustomer);
router.post("/", authenticate, createCustomer);
router.patch("/:id", authenticate, updateCustomer);
router.delete("/:id", authenticate, deleteCustomer);

export default router;