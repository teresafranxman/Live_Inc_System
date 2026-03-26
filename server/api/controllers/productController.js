// Product controller for API

import { Product } from "../models/productModel.js";

export const getProducts = async (req, res) => {
    const products = await Product.getAll();
    res.json(products);
};

export const getProduct = async (req, res) => {
    const product = await Product.getById(req.params.id);
    res.json(product)
};

export const createProduct = async (req, res) => {
    const id = await Product.create(req.body);
    res.status(201).json({ id });
};

export const updateProduct = async (req, res) => {
    await Product.update(req.params.id, req.body);
    res.sendStatus(204);
};

export const deleteProduct = async (req, res) => {
    await Product.delete(req.params.id);
    res.sendStatus(204);
}