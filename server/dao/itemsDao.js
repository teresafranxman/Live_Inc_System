// dao/itemsDao.js - Data Access Object for products table

const db = require('../db');

function all() {
    return db.prepare('SELECT * FROM products ORDER BY id').all();
}

function find(id) {
    return db.prepare('SELECT * FROM products WHERE id = ?').get(id);
}

function create({ name, productImg, description, price, quantity, rating }) {
    const stmt = db.prepare(`
        INSERT INTO products (name, productImg, description, price, quantity, rating)
        VALUES (?, ?, ?, ?, ?, ?)
    `);
    const info = stmt.run(name, productImg, description, price, quantity, rating);
    return find(info.lastInsertRowid);
}

function update(id, { name, productImg, description, price, quantity, rating }) {
    const stmt = db.prepare(`
        UPDATE products
        SET name = ?, productImg = ?, description = ?, price = ?, quantity = ?, rating = ?, updated_at = datetime('now')
        WHERE id = ?
    `);
    const info = stmt.run(name, productImg, description, price, quantity, rating, id);
    return info.changes > 0 ? find(id) : null;
}

function destroy(id) {
    const info = db.prepare('DELETE FROM products WHERE id = ?').run(id);
    return info.changes > 0;
}

module.exports = { all, find, create, update, destroy }