// Order Controller for Order API

import { db } from "../config/db.js";
import { Order } from "../models/orderModel.js";
import { Customer } from "../models/customerModel.js";
import { OrderItem } from "../models/orderItemModel.js";
import { Product } from "../models/productModel.js";

export const getOrder = async (req, res) => {
    try {
        const order = await Order.getById(req.params.id);
        const orderItems = await OrderItem.getByOrderId(order.OrderID);

        res.json({
            ...order,
            items: orderItems
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createOrder = async (req, res) => {
    const { CustomerID, orderItems } = req.body;

    const conn = await db.getConnection();
    await conn.beginTransaction();

    try {
        // 1. Create Order
        const OrderID = await Order.create(conn, CustomerID);

        let total = 0;

        // 2. Process each item
        for (const orderItem of items) {
            const product = await Product.getById(orderItem.ProductID);

            if (!product) {
                throw new Error(`Product ${item.ProductID} not found`);
            }

            const Price = product.Price;
            const subtotal = Price * orderItem.Quantity;
            total += subtotal;

            // 3. Create Order Item
            await OrderItem.create(
                conn,
                OrderID,
                orderItem.ProductID,
                orderItem.Quantity,
                Price
            );
        }

        // 4. Update Order Total
        await Order.updateTotal(conn, OrderID, total);

        await conn.commit();

        res.status(201).json({
            message: "Order created successfully",
            OrderID,
            total
        });

    } catch (err) {
        await conn.rollback();
        res.status(500).json({ error: err.message });
    } finally {
        conn.release();
    }
};