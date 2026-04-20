// Server file for API

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import app from "./index.js";
import { db } from "./config/db.js";

app.use(cors());

const PORT = process.env.PORT || 3000;

db.query("SELECT NOW()")
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.error("DB connection error:", err));

app.get("/db-check", async (req, res) => {
    const result = await db.query("SELECT current_database()");
    res.json(result.rows);
});

app.get("/", (req, res) => {
    res.send("API is now accessible on the LAN!");
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});