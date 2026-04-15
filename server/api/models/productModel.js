// Products Model for Products API

import { db } from "../config/db.js";

export const Product = {
    getAll: async () => {
        const result = await db.query(
            `SELECT "ProductID", "Name", "ProductImg", "Description", "Price", "Quantity", "Rating"
             FROM "Product"`
        );
        return result.rows;
    },

    getById: async (id) => {
        const result = await db.query(
            `SELECT "ProductID", "Name", "ProductImg", "Description", "Price", "Quantity", "Rating"
             FROM "Product"
             WHERE "ProductID" =$1`,
            [id]
        );
        return result.rows[0];
    },

    create: async (Name, ProductImg, Description, Price, Quantity, Rating) => {
        if (!Name || Price == null || Quantity == null || Rating == null) {
            throw new Error("Missing required fields");
        }

        const result = await db.query(
            `INSERT INTO "Product" ("Name", "ProductImg", "Description", "Price", "Quantity", "Rating")
             VALUES ($1, $2, $3, $4, $5, $6)
             RETURNING "ProductID"`,
            [Name, ProductImg, Description, Price, Quantity, Rating]
        );

        return result.rows[0].ProductID;
    },

    update: async (id, product) => {
        const {
            name,
            productImg,
            description,
            price,
            quantity,
            rating
        } = product;

        const result = await db.query(
            `UPDATE "Product" 
             SET "Name"=$1, "ProductImg"=$2, "Description"=$3, "Price"=$4, "Quantity"=$5, "Rating"=$6
             WHERE "ProductID"=$7`,
            [name, productImg, description, price, quantity, rating, id]
        );

        return result.rowCount;
    },

    delete: async (id) => {
        const result = await db.query(
            `DELETE FROM "Product" WHERE "ProductID" = $1`,
            [id]
        );

        return result.rowCount;
    }
};