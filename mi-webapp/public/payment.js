const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const price = params.get("price");

const productInfo = document.getElementById("product-info");

productInfo.innerHTML = `
  <h2>${name}</h2>
  <p>Total: $${price}</p>
`;

const form = document.getElementById("payment-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  document.getElementById("message").innerHTML = `
  
    <h2 style="color: green;">
      ✅ Pago realizado con éxito por PSE
    </h2>
  
  `;

});