// gracias.js - muestra lo que la persona mandó en el formulario
// Los datos llegan en la URL, algo así: gracias.html?nombre=Ana&correo=...

// URLSearchParams me deja leer lo que viene después del ?
const parametros = new URLSearchParams(window.location.search);

const nombre = parametros.get("nombre");

// Si alguien entra directo a esta página no hay datos, entonces no muestro nada
if (nombre) {
  // textContent y no innerHTML, para que si alguien escribe código no se ejecute
  document.getElementById("nombre-visitante").textContent = nombre;
  document.getElementById("dato-correo").textContent = parametros.get("correo");
  document.getElementById("dato-motivo").textContent = parametros.get("motivo");
  document.getElementById("dato-mensaje").textContent = parametros.get("mensaje");

  document.getElementById("resumen").classList.remove("oculto");
}
