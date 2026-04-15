// Order Model for Order API

import { db } from "../config/db.js";

export const Order = {
    create: async (customerId) => {
        const [result] = await db.query(
            `INSERT INTO orders (CustomerID, OrderDate, TotalAmount)
             VALUES (?, NOW(), 0)`,
            [customerId]
        );

        return result.insertId;
    },

    updateTotal: async (orderId, total) => {
        const [result] = await db.query(
        "UPDATE orders SET TotalAmount=? WHERE OrderID=?",
        [total, orderId]
        );

        return result.insertId; 
    },

    getById: async (orderId) => {
        const [rows] = await db.query(
        "SELECT * FROM orders WHERE OrderID=?",
        [orderId]
        );
        return rows[0];
    }
};