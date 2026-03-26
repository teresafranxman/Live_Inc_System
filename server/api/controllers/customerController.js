// Customer Controller for API

import { Customer } from "../models/customerModel.js";

export const getCustomers = async (req, res) => {
    const customers = await Customer.getAll();
    res.json(customers);
};

export const getCustomer = async (req, res) => {
    const customer = await Customer.getById(req.params.id);
    res.json(customer);
};

export const createCustomer = async (req, res) => {
    const id = await Customer.create(req.body);
    res.status(201).json({ id });
};

export const updateCustomer = async (req, res) => {
    await Customer.update(req.params.id, req.body);
    res.sendStatus(204);
};

export const deleteCustomer = async (req, res) => {
    await Customer.delete(req.params.id);
    res.sendStatus(204);
}