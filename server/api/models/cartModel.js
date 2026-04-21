// Cart Model for Cart API

import { db } from "../config/db.js";

export const Cart = {

    // Get or create cart
    getOrCreateCart: async (CustomerID) => {
        const result = await db.query(
            `SELECT * FROM "Cart" WHERE "CustomerID" = $1`,
            [CustomerID]
        );

        if (result.rows.length) return result.rows[0];

        const newCart = await db.query(
            `INSERT INTO "Cart"
             ("CustomerID", "CartItems")
             VALUES ($1, $2)
             RETURNING *`,
            [CustomerID, JSON.stringify([])]
        );

        return newCart.rows[0];
    },

    // Save updated cart items
    updateCartItems: async (CartID, CartItems) => {
        await db.query(
            `UPDATE "Cart"
             SET "CartItems" = $1
             WHERE "CartID" = $2`,
            [CartID, JSON.stringify([CartItems])]
        );
    }
};