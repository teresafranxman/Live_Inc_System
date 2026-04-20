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

    create: async (conn, CustomerID) => {
        const result = await conn.query(
            `INSERT INTO "Order"
             ("CustomerID", "OrderDate", "TotalAmount")
             VALUES ($1, NOW(), 0)
             RETURNING "OrderID"`,
            [CustomerID]
        );

        return result.rows[0].OrderID;
    },

    updateTotal: async (conn, OrderID, total) => {
        await conn.query(
            `UPDATE "Order"
             SET "TotalAmount" = $1
             WHERE "OrderID" = $2`,
            [total, OrderID]
        );
    }
};