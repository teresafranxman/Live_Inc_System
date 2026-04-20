// Order Item Model for Order API

import { db } from "../config/db.js";

export const OrderItem = {
    getByOrderId: async (OrderID) => {
        const result = await db.query(
            `SELECT *
             FROM "OrderItems"
             JOIN "Product" "Product" ON "OrderItems"."ProductID" = "Product"."ProductID"
             WHERE "OrderItems"."OrderID" = $1`,
            [OrderID]
        );

        return result.rows;
    },

    create: async (conn, OrderID, ProductID, Quantity, Price) => {
        await conn.query(
            `INSERT INTO "OrderItems" ("OrderID", "ProductID", "Quantity", "Price")
             VALUES ($1, $2, $3, $4)`,
            [OrderID, ProductID, Quantity, Price]
        );
    }
};