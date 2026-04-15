// Customer Controller for Customer API

import { Customer } from "../models/customerModel.js";

export const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.getAll();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getCustomer = async (req, res) => {
    try {
        const customer = await Customer.getById(req.params.id);

        if (!customer) {
            return res.status(404).json({ error: "Customer not found" });
        }

        res.json(customer);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createCustomer = async (req, res) => {
    try {
        const { firstName, lastName, email, password, contactNumber, address } = req.body;

        const id = await Customer.create({
            firstName,
            lastName,
            email,
            password,
            contactNumber,
            address
        });

        if (!email || !password) {
            return res.status(400).json({ error: "Missing fields" });
        }

        res.status(201).json({ id });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateCustomer = async (req, res) => {
    try {
        const { firstName, lastName, contactNumber, address } = req.body;

        await Customer.update(req.params.id, {
            firstName,
            lastName,
            contactNumber,
            address
        });

        res.sendStatus(200);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteCustomer = async (req, res) => {
    try {
        await Customer.delete(req.params.id);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}