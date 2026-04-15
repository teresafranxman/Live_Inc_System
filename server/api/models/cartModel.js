// Cart Model for Cart API

import { db } from "../config/db.js";

export const Cart = {
    getOrCreateCart: async (customerId) => {
        const [rows] = await db.query(
            "SELECT * FROM carts WHERE CustomerID=?",
            [customerId]
        );

        if (rows.length > 0) return rows[0];

        const [result] = await db.query(
            "INSERT INTO carts (CustomerID) VALUES (?)",
            [customerId]
        );

        return { CartID: result.insertId, CustomerID: customerId };
    }
};