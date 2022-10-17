let cofreContenedor = document.getElementById("cofre-box")
let gifEnlace = document.getElementById("gif-link");
let luther = document.getElementById("luther");
let lutherTexto = document.getElementById("lutherTexto");
let linkHub = document.getElementById("hub");
let contenedorHub = document.getElementById("hub-box");

console.log("tenemos", lutherTexto)

gifEnlace.addEventListener("click", cofreAbierto)


function cofreAbierto() {
    gifEnlace.classList.toggle("ocultarGif");
    gifEnlace.style.opacity = 0;
    gifEnlace.classList.toggle("quitarCofre");
    console.log("luther", luther)
    luther.classList.toggle("mostrarLuther");
    luther.style.opacity = 1;

    lutherTexto.classList.toggle("mostrarLutherTexto");
    lutherTexto.style.opacity = 1;
    animacionNext(1)
}

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