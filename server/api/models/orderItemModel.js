// Order Item Model for Order API

import { db } from "../config/db.js";

export const OrderItem = {
    create: async (orderId, productId, quantity, price) => {
        await db.query(
            `INSERT INTO order_items (OrderID, ProductID, Quantity, Price)
             VALUES (?, ?, ?, ?)`,
            [orderId, productId, quantity, price]
        );
    },

    getByOrderId: async (orderId) => {
        const [rows] = await db.query(
            `SELECT oi.*, p.name
             FROM order_items oi
             JOIN products p ON oi.ProductID = p.ProductID
             WHERE oi.OrderID = ?`,
            [orderId]
        );

        return rows;
    }
};