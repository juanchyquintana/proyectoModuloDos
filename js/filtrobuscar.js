const formBuscar = document.getElementById("buscar"),
  input = document.getElementById("buscarInput");

function buscar(e) {
  e.preventDefault();
  window.location.href = window.location.origin + `/pages/filtro.html?value=${encodeURIComponent(input.value)}`;
  console.log("Valor del parámetro 'value':", input.value);
}

formBuscar.addEventListener("submit", buscar);
