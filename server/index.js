// index.js - Live_Inc project server

const express = require("express");
const cors = require("cors");
const itemsRouter = require('./routes/products');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/__ping', (req , res) => {
    res.json({ok: true});
});

// Items API
app.use('/products', itemsRouter);

// 404 handler -- for unknown routes
app.use((req, res) => {
    res.status(404).json({
        error: { code: 'NOT_FOUND', message: 'Route not found' }
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('[ERROR]', err);
    const status = err.status || 500;
    res.status(status).json({
        error: {
            code: 'SERVER_ERROR',
            message: err.message || 'Unexpected server error'
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
    console.log(`Project API listening on http://127.0.0.1:${PORT}`)
);