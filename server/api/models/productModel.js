// Products Model for Products API

import { db } from "../config/db.js";

export const Product = {
    getAll: async () => {
        const [rows] = await db.query(
            `SELECT ProductID, name, productImg, description, price, quantity
             FROM products`
        );
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.query(
            `SELECT ProductID, name, productImg, description, price, quantity
             FROM products
             WHERE ProductID = ?`,
            [id]
        );
        return rows[0];
    },

    create: async (product) => {
        const {
            name,
            productImg,
            description,
            price,
            quantity
        } = product;

        const [result] = await db.query(
            `INSERT INTO products 
            (name, productImg, description, price, quantity)
             VALUES (?, ?, ?, ?, ?)`,
            [name, productImg, description, price, quantity]
        );

        return result.insertId;
    },

    update: async (id, product) => {
        const {
            name,
            productImg,
            description,
            price,
            quantity
        } = product;

        await db.query(
            `UPDATE products 
             SET name=?, productImg=?, description=?, price=?, quantity=? 
             WHERE ProductID=?`,
            [name, productImg, description, price, quantity, id]
        );
    },

    delete: async (id) => {
        await db.query(
            "DELETE FROM products WHERE ProductID = ?",
            [id]
        );
    }
};