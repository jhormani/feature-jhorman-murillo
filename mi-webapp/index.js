const express = require("express");
const cors = require("cors"); // Agregado para que React se pueda conectar sin bloqueos

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors()); // Agregado
app.use(express.json());
app.use('/imagenes', express.static('public')); // Agregado para servir las fotos de tus productos

/*
=====================================
IMPORTAR RUTAS
=====================================
*/
const productsRoutes = require("./routes/products.routes");
const cartRoutes = require("./routes/cart.routes"); // Agregado

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
app.use("/cart", cartRoutes); // Agregado

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
