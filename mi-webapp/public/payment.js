const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const price = params.get("price");

const productInfo = document.getElementById("product-info");

productInfo.innerHTML = `
  <h2>${name}</h2>
  <p class="price">Total: $${price}</p>
`;

const form = document.getElementById("payment-form");

const loading = document.getElementById("loading");

const message = document.getElementById("message");

loading.style.display = "none";

form.addEventListener("submit", (e) => {

  e.preventDefault();

  form.style.display = "none";

  loading.style.display = "block";

  setTimeout(() => {

    loading.style.display = "none";

    message.innerHTML = `
    
      <h2 style="color: green;">
        ✅ Pago realizado con éxito
      </h2>

      <p>
        Tu transacción PSE fue aprobada.
      </p>

    `;

  }, 3000);

});