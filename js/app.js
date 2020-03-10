//Elementos Menu e Icono del menu
const MENU = document.querySelector(".menu");
const ICON = document.getElementById("menu-icon");

function showMenu() {
  //animación de salida del icono
  ICON.classList.add("animated", "fadeOutUp");
  // y entrada del menu
  MENU.style.display = "flex";
  MENU.classList.add("animated", "fadeInDown");
  // //La animación termina y aplico reset a las clases
  ICON.addEventListener("animationend", function() {
    ICON.classList.remove("animated", "fadeOutUp");
    ICON.style.display = "none";
    MENU.classList.remove("animated", "fadeInDown");
  });

  // MENU.addEventListener("animationend", function() {
  //   MENU.classList.remove("animated", "fadeInDown");
  //   MENU.style.display = "flex";
  // });
}

function hideMenu() {
  //animación de salida del menu
  MENU.classList.add("animated", "fadeOutUp");
  //animacion de entrada del icono
  ICON.classList.add("animated", "fadeInUp");
  ICON.style.display = "flex";

  //La animación termina y aplico reset a las clases
  MENU.addEventListener("animationend", function() {
    MENU.classList.remove("animated", "fadeOutUp");
    MENU.style.display = "none";
    ICON.classList.remove("animated", "fadeInUp");
  });
}
