// Test API file for database connection

import { db } from "./config/db.js";

const test = async () => {
    const res = await db.query("SELECT NOW()");
    console.log(res.rows);
};

test();
