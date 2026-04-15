// Cart Item Model for Cart API

import { db } from "../config/db.js";

export const CartItem = {
    findItem: async (cartId, productId) => {
        const [rows] = await db.query(
            `SELECT * FROM cart_items 
            WHERE CartID=? AND ProductID=?`,
            [cartId, productId]
        );

        return rows[0];
    },

    addItem: async (cartId, productId, quantity) => {
        await db.query(
            `INSERT INTO cart_items (CartID, ProductID, Quantity)
            VALUES (?, ?, ?)`,
            [cartId, productId, quantity]
        );
    },

    updateQuantity: async (id, quantity) => {
        await db.query(
            "UPDATE cart_items SET Quantity=? WHERE CartItemID=?",
            [quantity, id]
        );
    },

    deleteItem: async (id) => {
        await db.query(
            "DELETE FROM cart_items WHERE CartItemID=?",
            [id]
        );
    },

    getCartItems: async (cartId) => {
        const [rows] = await db.query(
            `SELECT ci.*, p.name, p.price
            FROM cart_items ci
            JOIN products p ON ci.ProductID = p.ProductID
            WHERE ci.CartID=?`,
            [cartId]
        );

        return rows;
    },

    clearCart: async (cartId) => {
        await db.query(
            "DELETE FROM cart_items WHERE CartID=?",
            [cartId]
        );
    }
};