const form = document.getElementById("buscar"),
  input = document.getElementById("buscarInput");

function buscar(e) {
  e.preventDefault();
  window.location.href = window.location.origin + `/pages/filtro.html?value=${encodeURIComponent(input.value)}`;
  console.log("Valor del parámetro 'value':", input.value);
}

form.addEventListener("submit", buscar);
