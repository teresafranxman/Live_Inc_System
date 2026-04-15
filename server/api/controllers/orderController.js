// Order Controller for Order API

import { db } from "../config/db.js";
import { Order } from "../models/orderModel.js";
import { OrderItem } from "../models/orderItemModel.js";
import { Product } from "../models/productModel.js";

export const createOrder = async (req, res) => {
    const { customerId, items } = req.body;

    const conn = await db.getConnection();
    await conn.beginTransaction();

    try {
        // 1. Create Order
        const orderId = await Order.create(conn, customerId);

        let total = 0;

        // 2. Process each item
        for (const item of items) {
            const product = await Product.getById(item.productId);

            if (!product) {
                throw new Error(`Product ${item.productId} not found`);
            }

            const price = product.price;
            const subtotal = price * item.quantity;
            total += subtotal;

            // 3. Create Order Item
            await OrderItem.create(
                conn,
                orderId,
                item.productId,
                item.quantity,
                price
            );
        }

        // 4. Update Order Total
        await Order.updateTotal(conn, orderId, total);

        await conn.commit();

        res.status(201).json({
            message: "Order created successfully",
            orderId,
            total
        });

    } catch (err) {
        await conn.rollback();
        res.status(500).json({ error: err.message });
    } finally {
        conn.release();
    }
};

export const getOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.getById(id);
        const items = await OrderItem.getByOrderId(id);

        res.json({
            ...order,
            items
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};