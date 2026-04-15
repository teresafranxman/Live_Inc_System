// Products Model for Products API

import { db } from "../config/db.js";

export const Product = {
    getAll: async () => {
        const result = await db.query(
            `SELECT "ProductID", name, description, price, quantity
             FROM products`
        );
        return result.rows;
    },

    getById: async (id) => {
        const result = await db.query(
            `SELECT "ProductID", name, description, price, quantity
             FROM products
             WHERE "ProductID" =$1`,
            [id]
        );
        return result.rows[0];
    },

    create: async (product) => {
        const {
            name,
            description,
            price,
            quantity
        } = product;

        const result = await db.query(
            `INSERT INTO products (name, description, price, quantity)
             VALUES ($1, $2, $3, $4)
             RETURNING "ProductID"`,
            [name, description, price, quantity]
        );

        return result.rows[0].ProductID;
    },

    update: async (id, product) => {
        const {
            name,
            description,
            price,
            quantity
        } = product;

        const result = await db.query(
            `UPDATE products 
             SET name=$1, description=$2, price=$3, quantity=$4
             WHERE "ProductID"=$5`,
            [name, description, price, quantity, id]
        );

        return result.rowCount;
    },

    delete: async (id) => {
        const result = await db.query(
            `DELETE FROM products WHERE "ProductID" = $1`,
            [id]
        );

        return result.rowCount;
    }
};