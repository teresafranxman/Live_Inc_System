// Cart Model for API

import { db } from "../config/db.js";

export const Cart = {
    getAll: async () => {
        const [rows] = await db.query("SELECT * FROM cart");
        return rows;
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
}