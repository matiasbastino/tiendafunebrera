// compra.js

// Cargar carrito desde localStorage
function cargarCarrito() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    return JSON.parse(carritoGuardado);
  }
  return [];
}

// Mostrar resumen en la página
function mostrarResumen(carrito) {
  const detalleDiv = document.getElementById("detalle");
  detalleDiv.innerHTML = "";

  if (carrito.length === 0) {
    detalleDiv.innerHTML = "<p>No hay productos en el carrito.</p>";
    return;
  }

  const ul = document.createElement("ul");

  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio.toLocaleString('es-AR')}`;
    ul.appendChild(li);
  });

  detalleDiv.appendChild(ul);

  // Mostrar total
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  const totalElem = document.createElement("p");
  totalElem.style.fontWeight = "700";
  totalElem.style.marginTop = "1rem";
  totalElem.textContent = `Total: $${total.toLocaleString('es-AR')}`;
  detalleDiv.appendChild(totalElem);

  // Actualizar textarea ocultos para envío
  document.getElementById("carritoData").value = JSON.stringify(carrito);
  document.getElementById("totalCarrito").value = total;
}

// Validar y manejar envío del formulario
function configurarFormulario() {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (e) => {
    // Ejemplo de validación básica:
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("contactoEmail").value.trim();

    if (!nombre || !email) {
      e.preventDefault();
      alert("Por favor completa los campos obligatorios: Nombre y Email.");
      return;
    }

    // Opcional: limpiar carrito después de confirmar compra
    localStorage.removeItem("carrito");
  });
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  const carrito = cargarCarrito();
  mostrarResumen(carrito);
  configurarFormulario();
});
