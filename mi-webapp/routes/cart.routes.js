const express = require("express");
const router = express.Router();

// Carrito temporal en memoria
let carrito = [];

// 1. Obtener los productos del carrito
router.get("/", (req, res) => {
    res.json(carrito);
});

// 2. Agregar un producto al carrito
router.post("/", (req, res) => {
    const { id, nombre, precio, cantidad } = req.body;

    if (!id || !nombre || !precio) {
        return res.status(400).json({ mensaje: "Faltan datos obligatorios del producto" });
    }

    // Verificar si el producto ya existe en el carrito
    const productoExistente = carrito.find(item => item.id === id);

    if (productoExistente) {
        productoExistente.cantidad += cantidad || 1;
    } else {
        carrito.push({ id, nombre, precio, cantidad: cantidad || 1 });
    }

    res.status(201).json({ mensaje: "Producto agregado al carrito", carrito });
});

// 3. Vaciar el carrito
router.delete("/", (req, res) => {
    carrito = [];
    res.json({ mensaje: "Carrito vaciado", carrito });
});

module.exports = router;
