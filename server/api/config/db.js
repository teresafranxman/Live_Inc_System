import pg from "pg";
const { Pool } = pg;

import dotenv from "dotenv";
dotenv.config();

console.log("Loaded password:", process.env.DB_PASSWORD);

export const db = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    port: Number(process.env.DB_PORT)
});