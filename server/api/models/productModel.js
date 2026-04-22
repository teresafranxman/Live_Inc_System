// Products Model for Products API

import { db } from "../config/db.js";

export const Product = {
    getAll: async () => {
        const result = await db.query(
            `SELECT "ProductID", "ProductName", "ProductImg", "Description", "Price", "Quantity", "Rating"
             FROM "Product"`
        );
        return result.rows;
    },

    getById: async (id) => {
        const result = await db.query(
            `SELECT "ProductID", "ProductName", "ProductImg", "Description", "Price", "Quantity", "Rating"
             FROM "Product"
             WHERE "ProductID" =$1`,
            [id]
        );
        return result.rows;
    },

    create: async ({ ProductName, ProductImg, Description, Price, Quantity, Rating }) => {
        const result = await db.query(
            `INSERT INTO "Product" 
            ("ProductName", "ProductImg", "Description", "Price", "Quantity", "Rating")
             VALUES ($1, $2, $3, $4, $5, $6)
             RETURNING "ProductID"`,
            [ProductName, JSON.stringify(ProductImg), Description, Price, Quantity, Rating]
        );
        return result.rows;
    },

    update: async (id, product) => {
        const {
            ProductName,
            ProductImg,
            Description,
            Price,
            Quantity,
            Rating
        } = product;

        if (!ProductName || Price == null || Quantity == null || Rating == null) {
            throw new Error("Missing required fields");
        }

        const result = await db.query(
            `UPDATE "Product" 
             SET "ProductName"=$1, "ProductImg"=$2, "Description"=$3, "Price"=$4, "Quantity"=$5, "Rating"=$6
             WHERE "ProductID"=$7`,
            [ProductName, ProductImg, Description, Price, Quantity, Rating, id]
        );

        return result.rows;
    },

    delete: async (id) => {
        const result = await db.query(
            `DELETE FROM "Product" WHERE "ProductID" = $1`,
            [id]
        );

        return result.rowCount;
    }
};