const validateProduct = (req, res, next) => {

  const {
    nombre,
    marca,
    precio,
    categoria
  } = req.body;

  if (!nombre) {
    return res.status(400).json({
      error: "El nombre es obligatorio"
    });
  }

  if (!marca) {
    return res.status(400).json({
      error: "La marca es obligatoria"
    });
  }

  if (!precio) {
    return res.status(400).json({
      error: "El precio es obligatorio"
    });
  }

  if (!categoria) {
    return res.status(400).json({
      error: "La categoría es obligatoria"
    });
  }

  next();

};

module.exports = validateProduct;