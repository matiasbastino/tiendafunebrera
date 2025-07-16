function traer() {

    const contenido = document.getElementById("contenido"); // Selecciona el id="contenido" del html

    fetch('https://randomuser.me/api') // Llamada a la API
        .then(res => res.json()) // Convierte la respuesta de la API a JSON (objeto)
        .then(res => {
            console.log(res); // Mostrar toda la respuesta en consola.
            console.log(res.results[0].email); // Mostrar solo el email en consola.

            // Crear el contenido dinámicamente
            contenido.innerHTML = `
  <div class="reseña-item d-flex align-items-center">
    <img src="${res.results[0].picture.large}" alt="Foto" class="foto-resenia rounded-circle me-4" />
    <div class="texto-resenia">
      <p>Nombre: ${res.results[0].name.first}</p>
      <p>Email: ${res.results[0].email}</p>
      <p>País: ${res.results[0].location.country}</p>
    </div>
  </div>
`;
        })
        .catch(error => console.error('Error al obtener los datos:', error)); // Manejo de errores
}
