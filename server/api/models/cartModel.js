// Cart Model for Cart API

import { db } from "../config/db.js";

export const Cart = {
    getOrCreateCart: async (customerId) => {
        const [rows] = await db.query(
            `SELECT * FROM "Cart" WHERE "CustomerID"=$1`,
            [customerId]
        );

        if (rows.length > 0) return rows[0];

        const [result] = await db.query(
            `INSERT INTO "Cart" 
            ("CustomerID")
             VALUES ($1)
             RETURNING "CartID"`,
            [customerId]
        );

        return { CartID: result.rows[0].CartID, CustomerID: customerId };
    }
};