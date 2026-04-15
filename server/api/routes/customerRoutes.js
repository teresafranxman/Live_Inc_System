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

router.get("/", getCustomers); // admin authenticate
router.get("/:id", getCustomer); // authenticate
router.post("/", createCustomer); // authenticate
router.patch("/:id", updateCustomer); // authenticate
router.delete("/:id", deleteCustomer); // authenticate

export default router;