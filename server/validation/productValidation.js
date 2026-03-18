// validation/itemValidation.js - basic generic validation

function validateItem(input, { partial = false } = {}) {
    const errors = [];

    // Requred fields on create
    if (!partial) {
        if (!input.name) errors.push('Name is required');
        if (!input.productImg) errors.push('Product image is required');
        if (!input.description) errors.push('Description is required');
        if (!input.price) errors.push('Price is required');
        if (!input.quantity) errors.push('Quantity is required');
        if (!input.rating) errors.push('Rating is required');
    }

    // Types
    if (input.name != null && typeof input.name !== 'string') {
        errors.push('Name must be a string');
    }
    // How to validate an image????? placeholder
    if (input.productImg != null && typeof input.productImg !== 'image') {
        errors.push('Product image must be an image');
    }
    if (input.description != null && typeof input.description !== 'string') {
        errors.push('Description must be a string');
    }

    // Numbers
    if (input.price != null) {
        const n = Number(input.price);
        if (!Number.isFinite(n)) {
            errors.push('Price must be a number');
        } else if (n < 0) {
            errors.push('Price must be >= 0');
        }
    }
    if (input.quantity != null) {
        const n = Number(input.quantity);
        if (!Number.isFinite(n)) {
            errors.push('Quantity must be a number');
        } else if (n < 0) {
            errors.push('Quantity must be >= 0');
        }
    }
    if (input.rating != null) {
        const n = Number(input.rating);
        if (!Number.isFinite(n)) {
            errors.push('Rating must be a number');
        } else if (n < 0) {
            errors.push('Rating must be >= 0');
        }
    }
}