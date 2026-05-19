const container = document.getElementById("products-container");

/*
=====================================
OBTENER PRODUCTOS
=====================================
*/

fetch("/products")
  .then(response => response.json())
  .then(products => {

    products.forEach(product => {

      container.innerHTML += `
      
        <div class="card">

          <img src="${product.imagen}" alt="${product.nombre}">

          <div class="card-content">

            <h2>${product.nombre}</h2>

            <p>${product.marca}</p>

            <p class="price">$${product.precio}</p>

            <p class="category">${product.categoria}</p>

            <button onclick="
              window.location.href='payment.html?name=${product.nombre}&price=${product.precio}'
            ">
              Comprar
            </button>

          </div>

        </div>
      
      `;

    });

  });