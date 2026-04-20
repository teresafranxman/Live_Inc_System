// Order Model for Order API

import { db } from "../config/db.js";

export const Order = {
    getById: async (orderId) => {
        const result = await db.query(
        `SELECT * FROM "Order" WHERE "OrderID"=$1`,
        [OrderID]
        );
        return result.rows[0];
    },

    create: async (customerId) => {
        const result = await db.query(
            `INSERT INTO "Order" 
            (CustomerID, OrderDate, TotalAmount)
             VALUES ($1, NOW(), 0)
             RETURNING "OrderID"`,
            [CustomerID, 0]
        );

        return result.rows[0].OrderID;
    },

    updateTotal: async (orderId, total) => {
        const result = await db.query(
        `UPDATE "Order" SET TotalAmount=$1 WHERE "OrderID"=$2`,
        [total, orderId]
        );

        return result.rows; 
    }
};