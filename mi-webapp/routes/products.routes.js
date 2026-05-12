const express = require("express");

const router = express.Router();

const {
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controllers/products.controller");

/*
=====================================
RUTAS
=====================================
*/

router.get("/", getProducts);

router.get("/:id", getProductById);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;