// Authentication Controller for API

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Customer } from "../models/customerModel.js";

export const register = async (req, res) => {
    try {
        const {
            FirstName,
            LastName,
            Email,
            Password,
            PhoneNumber,
            Street,
            City,
            State,
            ZipCode
        } = req.body;

        // 1. Check if user exists
        const existing = await Customer.getByEmail(email);
        if (existing) {
            return res.status(400).json({ error: "Account with email already exists" });
        }

        // 2. Hash password
        const hashedPassword = await bcrypt.hash(req.body.Password, 10);

        // 3. Create user
        const id = await Customer.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Password: hashedPassword,
            PhoneNumber: req.body.PhoneNumber,
            Street: req.body.Street,
            City: req.body.City,
            State: req.body.State,
            ZipCode: req.body.ZipCode
        });

        res.status(201).json({ message: "Registration successful", id });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        // 1. Find user
        const user = await Customer.getByEmail(Email);
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // 2. Compare password
        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // 3. Generate JWT
        const token = jwt.sign(
            { id: user.CustomerID, Email: user.Email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({
            message: "Login successful",
            token
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};