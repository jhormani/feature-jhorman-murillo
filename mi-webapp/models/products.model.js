const fs = require("fs");

/*
=====================================
LEER PRODUCTOS
=====================================
*/

const readProducts = (callback) => {

  fs.readFile("./products.json", "utf8", (err, data) => {

    if (err) {
      return callback(err, null);
    }

    const products = JSON.parse(data);

    callback(null, products);

  });

};

/*
=====================================
GUARDAR PRODUCTOS
=====================================
*/

const saveProducts = (products, callback) => {

  fs.writeFile(
    "./products.json",
    JSON.stringify(products, null, 2),
    (err) => {

      if (err) {
        return callback(err);
      }

      callback(null);

    }
  );

};

module.exports = {
  readProducts,
  saveProducts
};