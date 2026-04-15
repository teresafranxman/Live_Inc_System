// db.js - Database connection, need Maya help here

// --TEST-- //
// const { Pool } = require('pg');

// const pool = new Pool({
//     user: 'root',
//     host: 'localhost',
//     database: 'your_db',
//     password: 'password',
//     port: 5432,
// });

// async function queryDatabase() {
//     try {
//         const res = await pool.query('SELECT NOW()');
//         console.log('Current Time: ', res.rows[0]);
//     } catch (err) {
//         console.error('Error executing query', err.stack);
//     } finally {
//         await pool.end();
//     }
// }

// queryDatabase();
// -------- //

import postgresql from "pg";
import dotenv from "dotenv";

dotenv.config();

export const db = postgresql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});