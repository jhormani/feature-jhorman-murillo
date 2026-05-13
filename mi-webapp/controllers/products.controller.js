const {
  readProducts,
  saveProducts
} = require("../models/products.model");

/*
=====================================
OBTENER TODOS LOS PRODUCTOS
=====================================
*/

const getProducts = (req, res) => {

  readProducts((err, products) => {

    if (err) {
      return res.status(500).json({
        error: "Error leyendo productos"
      });
    }

    res.json(products);

  });

};

/*
=====================================
OBTENER PRODUCTO POR ID
=====================================
*/

const getProductById = (req, res) => {

  readProducts((err, products) => {

    if (err) {
      return res.status(500).json({
        error: "Error leyendo productos"
      });
    }

    const product = products.find(
      p => p.id === parseInt(req.params.id)
    );

    if (!product) {
      return res.status(404).json({
        error: "Producto no encontrado"
      });
    }

    res.json(product);

  });

};

/*
=====================================
CREAR PRODUCTO
=====================================
*/

const createProduct = (req, res) => {

  readProducts((err, products) => {

    if (err) {
      return res.status(500).json({
        error: "Error leyendo productos"
      });
    }

    const newProduct = {
      id: products.length + 1,
      nombre: req.body.nombre,
      marca: req.body.marca,
      precio: req.body.precio,
      categoria: req.body.categoria
    };

    products.push(newProduct);

    saveProducts(products, (err) => {

      if (err) {
        return res.status(500).json({
          error: "Error guardando producto"
        });
      }

      res.status(201).json({
        mensaje: "Producto creado",
        producto: newProduct
      });

    });

  });

};

/*
=====================================
ACTUALIZAR PRODUCTO
=====================================
*/

const updateProduct = (req, res) => {

  readProducts((err, products) => {

    if (err) {
      return res.status(500).json({
        error: "Error leyendo productos"
      });
    }

    const index = products.findIndex(
      p => p.id === parseInt(req.params.id)
    );

    if (index === -1) {
      return res.status(404).json({
        error: "Producto no encontrado"
      });
    }

    products[index] = {
      ...products[index],
      ...req.body
    };

    saveProducts(products, (err) => {

      if (err) {
        return res.status(500).json({
          error: "Error actualizando producto"
        });
      }

      res.json({
        mensaje: "Producto actualizado",
        producto: products[index]
      });

    });

  });

};

/*
=====================================
ELIMINAR PRODUCTO
=====================================
*/

const deleteProduct = (req, res) => {

  readProducts((err, products) => {

    if (err) {
      return res.status(500).json({
        error: "Error leyendo productos"
      });
    }

    const filteredProducts = products.filter(
      p => p.id !== parseInt(req.params.id)
    );

    saveProducts(filteredProducts, (err) => {

      if (err) {
        return res.status(500).json({
          error: "Error eliminando producto"
        });
      }

      res.json({
        mensaje: "Producto eliminado"
      });

    });

  });

};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};