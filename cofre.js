let cofreContenedor = document.getElementById("cofre-box")
let gifEnlace = document.getElementById("gif-link");
let luther = document.getElementById("luther");
let lutherTexto = document.getElementById("lutherTexto");
let linkHub = document.getElementById("hub");


gifEnlace.addEventListener("click", cofreAbierto)


function cofreAbierto() {
    gifEnlace.classList.toggle("ocultarGif");
    gifEnlace.style.opacity = 0;
    gifEnlace.classList.toggle("quitarCofre");
    luther.classList.toggle("mostrarLuther");
    luther.style.opacity = 1;
    lutherTexto.classList.toggle("mostrarLutherTexto");
    lutherTexto.style.opacity = 1;
    linkHub.classList.toggle("mostrarHub")
    linkHub.style.display = "block"
}
