// Server file for API

import dotenv from "dotenv";
dotenv.config();

import app from "./index.js";
import { db } from "./config/db.js";

db.query("SELECT NOW()")
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.error("DB connection error:", err));

const PORT = process.env.PORT || 3000;

app.get("/db-check", async (req, res) => {
  const result = await db.query("SELECT current_database()");
  res.json(result.rows);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});