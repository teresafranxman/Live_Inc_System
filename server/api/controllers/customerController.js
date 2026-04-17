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
        if (!req.body.FirstName || !req.body.LastName || !req.body.Email || !req.body.Password || !req.body.PhoneNumber || !req.body.Street || !req.body.City || !req.body.State || !req.body.ZipCode) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const created = await Customer.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Password: req.body.Password,
            PhoneNumber: req.body.PhoneNumber,
            Street: req.body.Street,
            City: req.body.City,
            State: req.body.ZipCode
        });

        res.status(201).location(`/customers/${created.id}`).json(created);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateCustomer = async (req, res) => {
    try {
        const { FirstName, LastName, Email, Password, PhoneNumber, Street, City, State, ZipCode } = req.body;

        const updated = await Customer.update(req.params.id, {
            FirstName,
            LastName,
            Email,
            Password,
            PhoneNumber,
            Street,
            City,
            State,
            ZipCode
        });

        res.sendStatus(200).json(updated);

    } catch (err) {
        res.status(500).json({ error: err.message });
    };
};

export const deleteCustomer = async (req, res) => {
    try {
        const deleted = await Customer.delete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: "Customer not found." })
        }

        res.sendStatus(204).end();

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}