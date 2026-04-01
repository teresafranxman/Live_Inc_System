// Cart Model for Cart API

import { db } from "../config/db.js";

export const Cart = {
    getById: async (id) => {
        const [rows] = await db.query("SELECT * FROM cart WHERE CustomerID = ?", [id]);
        return rows[0];
    },

    create: async (cart) => {
        const { ProductID, CustomerID } = cart;

        const [result] = await db.query(
            `INSERT INTO cart (ProductID, CustomerID)
             VALUES (?, ?)`,
            [ProductID, CustomerID]
        );

        return result.insertId;
    },

    update: async (id, cart) => {
        const { ProductID, CustomerID } = cart;

        await db.query(
            `UPDATE cart SET ProductID=?, CustomerID=?
             WHERE CartID=?`
            [ProductID, CustomerID, id]
        );
    },

    delete: async (id) => {
        await db.query("DELETE FROM cart WHERE CartID = ?", [id]);
    }
}