// Customer Model for Customer API

import { db } from "../config/db.js";

export const Customer = {
    getAll: async () => {
        const [rows] = await db.query("SELECT * FROM customers");
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.query("SELECT * FROM customers WHERE CustomerID = ?", [id]);
        return rows[0];
    },

    create: async (customer) => {
        const { firstName, lastName, email, password, contactNumber, street, city, state, zipcode } = customer;

        const [result] = await db.query(
            `INSERT INTO customers (firstName, lastName, email, password, contactNumber, street, city, state, zipcode)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [firstName, lastName, email, password, contactNumber, street, city, state, zipcode]
        );

        return result.insertId;
    },

    update: async (id, customer) => {
        const { firstName, lastName, email, password, contactNumber, street, city, state, zipcode } = customer;

        await db.query(
            `UPDATE customers SET firstName=?, lastName=?, email=?, password=?, contactNumber=?, street=?, city=?, state=?, zipcode=? 
             WHERE CustomerID=?`,
            [firstName, lastName, email, password, contactNumber, street, city, state, zipcode, id]
        );
    },

    delete: async (id) => {
        await db.query("DELETE FROM customers WHERE CustomerID = ?", [id]);
    }
}