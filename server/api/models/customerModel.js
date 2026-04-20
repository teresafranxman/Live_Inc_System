// Customer Model for Customer API

import { db } from "../config/db.js";

export const Customer = {
    getAll: async () => {
        const result = await db.query(
            `SELECT "CustomerID", "FirstName", "LastName", "Email", "Password", "PhoneNumber", "Street", "City", "State", "ZipCode"
             FROM "Customer"`
        );
        return result.rows;
    },

    getById: async (id) => {
        const result = await db.query(
            `SELECT "CustomerID", "FirstName", "LastName", "Email", "Password", "PhoneNumber", "Street", "City", "State", "ZipCode"
             FROM "Customer"
             WHERE "CustomerID" = $1`,
            [id]
        );
        return result.rows;
    },

    getByEmail: async (Email) => {
        const result = await db.query(
            `SELECT * FROM "Customer" WHERE "Email" = $1`,
            [Email]
        );
        return result.rows;
    },

    create: async ({ FirstName, LastName, Email, Password, PhoneNumber, Street, City, State, ZipCode }) => {
        const result = await db.query(
            `INSERT INTO "Customer" 
            ("FirstName", "LastName", "Email", "Password", "PhoneNumber", "Street", "City", "State", "ZipCode")
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
             RETURNING "CustomerID"`,
            [FirstName, LastName, Email, Password, PhoneNumber, Street, City, State, ZipCode]
        );
        return result.rows;
    },

    update: async (id, customer) => {
        const {
            FirstName,
            LastName,
            Password,
            PhoneNumber,
            Street,
            City,
            State,
            ZipCode
        } = customer;

        if (!FirstName || !LastName || !Password || !PhoneNumber || !Street || !City || !State || !ZipCode) {
            throw new Error("Missing required fields");
        }

        const result = await db.query(
            `UPDATE "Customer" 
             SET "FirstName"=$1, "LastName"=$2, "Password"=$3, "PhoneNumber"=$4, "Street"=$5, "City"=$6, "State"=$7, "ZipCode"=$8
             WHERE "CustomerID"=$9`,
            [FirstName, LastName, Password, PhoneNumber, Street, City, State, ZipCode, id]
        );

        return result.rows;
    },

    delete: async (id) => {
        const result = await db.query(
            `DELETE FROM "Customer" WHERE "CustomerID" = $1`,
            [id]
        );

        return result.rowCount;
    }
}