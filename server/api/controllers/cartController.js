// Cart Controller for Cart API

import { db } from "../config/db.js";
import { Cart } from "../models/cartModel.js";
import { Order } from "../models/orderModel.js";
import { OrderItem } from "../models/orderItemModel.js";
import { Product } from "../models/productModel.js";
import { Customer } from "../models/customerModel.js";

export const getCart = async (req, res) => {
    try {
        const { CustomerID } = req.query;

        const cart = await Cart.getOrCreateCart(CustomerID);

        res.json({
            CartID: cart.CartID,
            items: cart.CartItems || []
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addToCart = async (req, res) => {
    try {
        const { CustomerID, ProductID, Quantity } = req.body;

        const cart = await Cart.getOrCreateCart(CustomerID);
        let items = cart.CartItems || [];

        // Check if item already exists
        const existing = items.find(i => i.ProductID === ProductID);

        if (existing) {
            existing.CartItems += Quantity;
        } else {
            items.push({ ProductID, CartItems });
        }

        await Cart.updateCartItems(cart.CartID, items);

        res.json({ message: "Item added to cart", items });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { Quantity } = req.body;

        await CartItem.updateQuantity(id, Quantity);
        res.json({ message: "Quantity updated" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const { CustomerID, ProductID } = req.body;

        const cart = await Cart.getOrCreateCart(CustomerID);

        let items = cart.CartItems.filter(
            i => i.ProductID !== ProductID
        );

        await Cart.updateCartItems(cart.CartID, items);

        res.json({ message: "Item removed", items });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const clearCart = async (req, res) => {
    try {
        const { CustomerID } = req.body;

        const cart = await Cart.getOrCreateCart(CustomerID);

        await Cart.updateCartItems(cart.CartID, []);

        res.json({ message: "Cart cleared" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const checkout = async (req, res) => {
    const client = await db.connect();

    try {
        await client.query("BEGIN");

        const { CustomerID } = req.body;

        // 1. Get cart
        const cart = await Cart.getOrCreateCart(CustomerID);
        const items = cart.CartItems || [];

        if (!items.length) {
            throw new Error("Cart is empty");
        }

        // 2. Create order
        const OrderID = await Order.create(client, CustomerID);

        let total = 0;

        // 3. Process each item
        for (const item of items) {
            const product = await Product.getById(item.ProductID);

            if (!product) {
                throw new Error("Product not found");
            }

            if (product.Quantity < item.Quantity) {
                throw new Error(`Not enough stock for ${product.Name}`);
            }

            const price = product.Price;
            const subtotal = price * item.Quantity;
            total += subtotal;

            // Create order item
            await OrderItem.create(
                client,
                OrderID,
                item.ProductID,
                item.Quantity,
                price
            );

            // Update stock (SAFE way)
            const update = await client.query(
                `UPDATE "Product"
                 SET "Quantity" = "Quantity" - $1
                 WHERE "ProductID" = $2
                 AND "Quantity" >= $1`,
                [item.Quantity, item.ProductID]
            );

            if (update.rowCount === 0) {
                throw new Error(`Stock conflict for ${product.Name}`);
            }
        }

        // 💰 4. Update total
        await Order.updateTotal(client, OrderID, total);

        // 🧹 5. Clear cart
        await Cart.updateCartItems(cart.CartID, []);

        await client.query("COMMIT");

        res.status(201).json({
            message: "Checkout successful",
            OrderID,
            total
        });

    } catch (err) {
        await client.query("ROLLBACK");
        res.status(400).json({ error: err.message });

    } finally {
        client.release();
    }
};