// Products Model for Products API

import { db } from "../config/db.js";

export const Product = {
    getAll: async () => {
        const result = await db.query(
            `SELECT "ProductID", name, "productImg", description, price, quantity
             FROM products`
        );
        return result.rows;
    },

    getById: async (id) => {
        const result = await db.query(
            `SELECT "ProductID", name, "productImg", description, price, quantity
             FROM products
             WHERE "ProductID" =$1`,
            [id]
        );
        return result.rows[0];
    },

    create: async (product) => {
        const {
            name,
            productImg,
            description,
            price,
            quantity
        } = product;

        const result = await db.query(
            `INSERT INTO products (name, "productImg", description, price, quantity)
             VALUES ($1, $2, $3, $4)
             RETURNING "ProductID"`,
            [name, productImg, description, price, quantity]
        );

        return result.rows[0].ProductID;
    },

    update: async (id, product) => {
        const {
            name,
            productImg,
            description,
            price,
            quantity
        } = product;

        const result = await db.query(
            `UPDATE products 
             SET name=$1, "productImg"=$2, description=$3, price=$4, quantity=$5
             WHERE "ProductID"=$6`,
            [name, productImg, description, price, quantity, id]
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