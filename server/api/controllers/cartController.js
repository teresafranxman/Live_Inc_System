// Cart Controller for Cart API

import { Cart } from "../models/cartModel.js";

export const getCart = async (req, res) => {
    const cart = await Cart.getById(req.prams.id);
    res.json(cart);
};

export const createCart = async (req, res) => {
    const id = await Cart.create(req.body);
    res.status(201).json({ id });
};

export const updateCart = async (req, res) => {
    await Cart.update(req.params.id, req.body);
    res.sendStatus(200);
}

export const deleteCart = async (req, res) => {
    await Cart.delete(req.params.id);
    res.sendStatus(204);
}