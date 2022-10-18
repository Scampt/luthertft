// CODIGO PARA ACCIONES DESPUES DE DAR CLICK AL COFRE
let cofreContenedor = document.getElementById("cofre-box")
let gifEnlace = document.getElementById("gif-link");
let luther = document.getElementById("luther");
let lutherTexto = document.getElementById("lutherTexto");
let linkHub = document.getElementById("hub");
let contenedorHub = document.getElementById("hub-box");
let loadingIndicador = document.getElementById("loading")
let cuerpo = document.getElementById("cuerpo")

// CODIGO PARA EL SCREEN LOADER
window.onload = function () {
    setTimeout(function () {
    if(loadingIndicador) {
        loadingIndicador.classList.toggle("esconderGif")
        loadingIndicador.style.opacity = 0
        loadingIndicador.classList.toggle("quitarGif")

        cofreContenedor.classList.toggle("mostrarCofre")
        cuerpo.classList.toggle("cambiarFondo")
    }
}, 4500)
}
gifEnlace.addEventListener("click", cofreAbierto)

function cofreAbierto() {
    gifEnlace.classList.toggle("esconderGif");
    gifEnlace.style.opacity = 0;
    gifEnlace.classList.toggle("quitarGif");

    luther.classList.toggle("mostrarLuther");
    luther.style.opacity = 1;

    lutherTexto.classList.toggle("mostrarLutherTexto");
    lutherTexto.style.opacity = 1;

    animacionNext(1)
}


// CODIGO PARA EL TEXTO DE LUTHER
let level = 1
let loop = 0

const animacionNext = (i) => {
    let stop = lutherTexto.children.length;
    let animated = document.querySelector(`#hijo_${i}`);
    animated.classList.add('animarTextoEntrada');
    animated.addEventListener('animationend', () => {
        if (i == stop) {
            console.log("entre")
            animated.classList.add('animarTextoSalida');
            contenedorHub.classList.add("mostrarHub")
            linkHub.style.color = "#fff"
            linkHub.style.fontSize = "50px"
            level = "iDone";
        } else {
            animated.classList.add('animarTextoSalida');
            animacionNext(i + 1);
        }
    });
}
