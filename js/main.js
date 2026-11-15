// main.js - lo uso en todas las páginas

// Menú del celular
const menuBoton = document.getElementById("menu-boton");
const menu = document.getElementById("menu");

if (menuBoton && menu) {
  menuBoton.addEventListener("click", () => {
    // toggle: si la clase no está la pone, si está la quita
    const abierto = menu.classList.toggle("menu--abierto");
    menuBoton.setAttribute("aria-expanded", abierto);
  });
}

// Pone el año solo en el footer, así no tengo que cambiarlo cada enero
const anio = document.getElementById("anio");

if (anio) {
  anio.textContent = new Date().getFullYear();
}
