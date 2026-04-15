// Cart Controller for Cart API

import { db } from "../config/db.js";
import { Cart } from "../models/cartModel.js";
import { CartItem } from "../models/cartItemModel.js";
import { Order } from "../models/orderModel.js";
import { OrderItem } from "../models/orderItemModel.js";
import { Product } from "../models/productModel.js";

export const getCart = async (req, res) => {
    try {
        const customerId = req.user.id;

        const cart = await Cart.getOrCreateCart(customerId);
        const items = await CartItem.getCartItems(cart.CartID);

        res.json({
            cartId: cart.CartID,
            items
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addToCart = async (req, res) => {
    try {
        const customerId = req.user.id;
        const { productId, quantity } = req.body;

        const cart = await Cart.getOrCreateCart(customerId);

        const existing = await CartItem.findItem(
            cart.CartID,
            productId
        );

        if (existing) {
            await CartItem.updateQuantity(
                existing.CartItemID,
                existing.Quantity + quantity
            );
        } else {
            await CartItem.addItem(
                cart.CartID,
                productId,
                quantity
            );
        }

        res.json({ message: "Item added to cart" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        await CartItem.updateQuantity(id, quantity);
        res.json({ message: "Quantity updated" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const removeCartItem = async (req, res) => {
    try {
        const { id } = req.params;

        await CartItem.deleteItem(id);
        res.json({ message: "Item removed" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const clearCart = async (req, res) => {
    try {
        const customerId = req.user.id;

        const cart = await Cart.getOrCreateCart(customerId);
        await CartItem.clearCart(cart.CartID);

        res.json({ message: "Cart cleared" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const checkout = async (req, res) => {
    const conn = await db.getConnection();
    await conn.beginTransaction();

    try {
        const customerId = req.user.id;
        // 1. Get Cart
        const cart = await Cart.getOrCreateCart(customerId);
        const items = await CartItem.getCartItems(cart.CartID);

        if (!items.length) {
            return res.status(400).json({ error: "Cart is empty" });
        }

        // 2. Create Order
        const orderId = await Order.create(conn, customerId);

        let total = 0;

        // 3. Process Items
        for (const item of items) {
            const product = await Product.getById(item.ProductID);

            // 3.1. Check Product
            if (!product) {
                throw new Error(`Product ${item.ProductID} not found`);
            }

            // 3.2. Check Stock
            if (product.quantity < item.Quantity) {
                throw new Error(`Not enough stock for product ${product.name}`);
            }

            const price = product.price;
            const subtotal = price * item.Quantity;
            total += subtotal;

            // 3.3. Create OrderItem
            await OrderItem.create(
                conn,
                orderId,
                item.ProductID,
                item.Quantity,
                price
            );

            // 3.4. Reduce inventory
            await conn.query(
                `UPDATE products 
                 SET quantity = quantity - ? 
                 WHERE ProductID = ?`,
                [item.Quantity, item.ProductID]
            );
        }

        // 4. Update total
        await Order.updateTotal(conn, orderId, total);

        // 5. Clear cart
        await CartItem.clearCart(cart.CartID);

        await conn.commit();

        res.status(201).json({
            message: "Checkout successful",
            orderId,
            total
        });

    } catch (err) {
        await conn.rollback();
        res.status(400).json({ error: err.message });

    } finally {
        conn.release();
    }
};