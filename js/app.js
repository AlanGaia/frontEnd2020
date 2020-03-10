//Elementos Menu e Icono del menu
const MENU = document.querySelector(".menu");
const ICON = document.getElementById("menu-icon");

function showMenu() {
  // RESET ICON - MENU CLASES
  ICON.classList.remove("fadeInDown");
  MENU.classList.remove("fadeOutUp");

  //Animación de salida del icono
  ICON.classList.add("fadeOutUp");

  //Menu Display:(none => flex) & Animación de Entrada
  MENU.style.display = "flex";
  MENU.classList.add("fadeInDown");
}

function hideMenu() {
  // RESET ICON - MENU CLASES
  MENU.classList.remove("fadeInDown");
  ICON.classList.remove("fadeOutUp");

  //Animación de salida del menu
  MENU.classList.add("fadeOutUp");

  //Animación de entrada del icono
  ICON.classList.add("fadeInDown");
}
