// Product controller for Products API

import { Product } from "../models/productModel.js";

export const getProducts = async (req, res) => {
    try {
        // const page = parseInt(req.query.page) || 1;
        // const limit = parseInt(req.query.limit) || 10;
        // const offset = (page - 1) * limit;

        const products = await Product.getAll();

        res.json(products);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getProduct = async (req, res) => {
    try {
        const product = await Product.getById(req.params.id);

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.json(product);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createProduct = async (req, res) => {
    try {
        const { name, productImg, description, price, quantity, rating } = req.body;

        if (!name || price == null || quantity == null || rating == null) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        if (price < 0 || quantity < 0) {
            return res.status(400).json({ error: "Invalid price or quantity" });
        }

        const id = await Product.create({
            name,
            productImg,
            description,
            price,
            quantity,
            rating
        });

        res.status(201).json({ id });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { name, productImg, description, price, quantity, rating } = req.body;

        const updated = await Product.update(req.params.id, {
            name,
            productImg,
            description,
            price,
            quantity,
            rating
        });

        if (!updated) {
            return res.status(400).json({ error: "Product not found" });
        }

        if (!name || price == null || quantity == null || rating == null) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        if (price < 0 || quantity < 0) {
            return res.status(400).json({ error: "Price or quantity cannot be negative" });
        }

        res.sendStatus(200);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.delete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}