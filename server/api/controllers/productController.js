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
        if (!req.body.ProductName || req.body.Price == null || req.body.Quantity == null || req.body.Rating == null) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        if (req.body.Price < 0 || req.body.Quantity < 0) {
            return res.status(400).json({ error: "Invalid price or quantity" });
        }

        const created = await Product.create({
            ProductName: req.body.ProductName,
            ProductImg: req.body.ProductImg,
            Description: req.body.Description,
            Price: req.body.Price,
            Quantity: req.body.Quantity,
            Rating: req.body.Rating
        });

        res.status(201).location(`/products/${created.id}`).json(created);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { ProductName, ProductImg, Description, Price, Quantity, Rating } = req.body;
        const updated = await Product.update(req.params.id, {
            ProductName,
            ProductImg,
            Description,
            Price,
            Quantity,
            Rating
        });

        res.sendStatus(200).json(updated);

    } catch (err) {
        res.status(500).json({ 
            error: err.message, 
        });
    };
}
;

export const deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.delete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.sendStatus(204).end();
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}