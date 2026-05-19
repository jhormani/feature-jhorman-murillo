const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

app.use(express.static("public")); // ← AGREGA ESTA LÍNEA

app.use('/imagenes', express.static('public'));

/*
=====================================
IMPORTAR RUTAS
=====================================
*/

const productsRoutes = require("./routes/products.routes");
const cartRoutes = require("./routes/cart.routes");

/*
=====================================
RUTA PRINCIPAL
=====================================
*/

app.get("/", (req, res) => {
  res.json({
    mensaje: "API REST TechStore funcionando"
  });
});

/*
=====================================
USAR RUTAS
=====================================
*/

app.use("/products", productsRoutes);
app.use("/cart", cartRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});