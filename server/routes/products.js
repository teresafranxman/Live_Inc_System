// routes/products.js - CRUD routes for items

const router = require('express').Router();
const dao = require('../dao/itemsDao');
const { validateItem } = require('../validation/productValidation');

// GET /products
router.get('/', (req, res) => {
    const items = dao.all();
    res.json(items);
});

// GET /products/:id
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const item = dao.find(id);
    if (!item) {
        return res.status(404).json({
            error: { code: 'NOT_FOUND', message: 'Product not found.'}
        });
    }
    res.json(item);
});

// POST /products
router.post('/', (req, res) => {
    const { valid, errors } = validateItem(req.body, { partial: false});
    if (!valid) {
        return res.status(422).json({
            error: {
                code: "VALIDATION_ERROR",
                message: 'Invalid input',
                details: errros
            }
        });
    }

    const created = dao.create({
        name: req.body.name,
        productImg: req.body.productImg,
        description: req.body.description,
        price: req.body.price != null ? Number(req.body.price) : null,
        quantity: req.body.quantity != null ? Number(req.body.quantity) : null,
        rating: req.body.rating != null ? Number(req.body.rating) : null
        // reviews: req.body.reviews
    });

    res
        .status(201)
        .location(`/products/${created.id}`)
        .json(created);
});

// PUT /products/:id
router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const { valid, errors } = validateItem(req.body, { partial: false });
    if (!valid) {
        return res.status(422).json({
            error: {
                code: 'VALIDATION_ERROR',
                message: 'Invalid input',
                details: errors
            }
        });
    }

    const updated = dao.update(id, {
        name: req.body.name,
        productImg: req.body.productImg,
        description: req.body.description,
        price: req.body.price != null ? Number(req.body.price) : null,
        quantity: req.body.quantity != null ? Number(req.body.quantity) : null,
        rating: req.body.rating != null ? Number(req.body.rating) : null
        // reviews: req.body.reviews
    });

    if (!updated) {
        return res.status(404).json({
            error: { code: 'NOT_FOUND', message: 'Product not found' }
        });
    }

    res.json(updated);
});

// DELETE /products/:id
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const ok = dao.destroy(id);
    if (!ok) {
        return res.status(404).json({
            error: { code: 'NOT_FOUND', message: 'Product not found' }
        });
    }
    res.status(204).end();
});

module.exports = router;