let cofreContenedor = document.getElementById("cofre-box")
let gifEnlace = document.getElementById("gif-link");
let luther = document.getElementById("luther");
let lutherTexto = document.getElementById("lutherTexto");
let linkHub = document.getElementById("hub");
let contenedorHub = document.getElementById("hub-box");


gifEnlace.addEventListener("click", cofreAbierto)


function cofreAbierto() {
    gifEnlace.classList.toggle("ocultarGif");
    gifEnlace.style.opacity = 0;
    gifEnlace.classList.toggle("quitarCofre");

    luther.classList.toggle("mostrarLuther");
    luther.style.opacity = 1;
    lutherTexto.classList.toggle("mostrarLutherTexto");
    lutherTexto.style.opacity = 1;

    contenedorHub.classList.toggle("mostrarHub")
    linkHub.style.color = "#fff"
    linkHub.style.fontSize = "50px"

}
