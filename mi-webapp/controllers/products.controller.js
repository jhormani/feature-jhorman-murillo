const fs = require("fs");

/*
=====================================
OBTENER TODOS LOS PRODUCTOS
=====================================
*/

const getProducts = (req, res) => {

  fs.readFile("./products.json", "utf8", (err, data) => {

    if (err) {
      return res.status(500).json({
        error: "Error leyendo productos"
      });
    }

    const products = JSON.parse(data);

    res.json(products);

  });

};

/*
=====================================
OBTENER PRODUCTO POR ID
=====================================
*/

const getProductById = (req, res) => {

  fs.readFile("./products.json", "utf8", (err, data) => {

    if (err) {
      return res.status(500).json({
        error: "Error leyendo productos"
      });
    }

    const products = JSON.parse(data);

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
ACTUALIZAR PRODUCTO
=====================================
*/

const updateProduct = (req, res) => {

  fs.readFile("./products.json", "utf8", (err, data) => {

    if (err) {
      return res.status(500).json({
        error: "Error leyendo productos"
      });
    }

    let products = JSON.parse(data);

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

    fs.writeFile(
      "./products.json",
      JSON.stringify(products, null, 2),
      (err) => {

        if (err) {
          return res.status(500).json({
            error: "Error actualizando producto"
          });
        }

        res.json({
          mensaje: "Producto actualizado",
          producto: products[index]
        });

      }
    );

  });

};

/*
=====================================
ELIMINAR PRODUCTO
=====================================
*/

const deleteProduct = (req, res) => {

  fs.readFile("./products.json", "utf8", (err, data) => {

    if (err) {
      return res.status(500).json({
        error: "Error leyendo productos"
      });
    }

    let products = JSON.parse(data);

    const filteredProducts = products.filter(
      p => p.id !== parseInt(req.params.id)
    );

    fs.writeFile(
      "./products.json",
      JSON.stringify(filteredProducts, null, 2),
      (err) => {

        if (err) {
          return res.status(500).json({
            error: "Error eliminando producto"
          });
        }

        res.json({
          mensaje: "Producto eliminado"
        });

      }
    );

  });

};

module.exports = {
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
};