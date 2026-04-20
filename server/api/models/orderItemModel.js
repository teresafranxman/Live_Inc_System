// Order Item Model for Order API

import { db } from "../config/db.js";

export const OrderItem = {
    getByOrderId: async (orderId) => {
        const result = await db.query(
            `SELECT *
             FROM "OrderItems"
             JOIN "Product" "Product" ON "OrderItems"."ProductID" = "Product"."ProductID"
             WHERE "OrderItems"."OrderID" = $1`,
            [orderId]
        );

        return result.rows;
    },

    create: async (OrderID, ProductID, Quantity, Price) => {
        const result = await db.query(
            `INSERT INTO "OrderItem" 
            ("OrderID", "ProductID", "Quantity", "Price")
             VALUES ($1, $2, $3, $4)
             RETURNING "OrderItemID"`,
            [OrderID, ProductID, Quantity, Price]
        );
        return result.rows;
    }
};