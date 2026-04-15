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

router.get("/customers", authenticate, getCustomers); // admin
router.get("/customers/:id", authenticate, getCustomer);
router.post("/customers", authenticate, createCustomer);
router.patch("/customers/:id", authenticate, updateCustomer);
router.delete("/customers/:id", authenticate, deleteCustomer);

export default router;