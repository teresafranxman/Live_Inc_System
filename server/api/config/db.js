// db.js - Database connection, need Maya help here

// -------- //
import mysql from "mysql2/promise";

export const db = await sqlite3.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "your_db"
});
// -------- //

/*
const path = require('path');
const Database = require('sqlite3');

// This needs to change to the actual database, temporary path
const dbFile = path.join(__dirname, 'project.db');
const db = new Database(dbFile);

db.pragma('foreign_keys = ON');

db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        productImg TEXT NOT NULL,
        description TEXT NOT NULL,
        price NUMERIC,
        quantity INTEGER, 
        rating NUMERIC,
        created_at TEXT DEFAULT (datetime('now')),
        updated_at TEXT
    );
`);

module.exports = db; */