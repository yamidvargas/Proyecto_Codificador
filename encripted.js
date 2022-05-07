//agregar evento a boton para encriptar
function encrypted() {
    let agarrarText = document.getElementById("textAreaUser")
    let nodoEncrypted = document.getElementById("btnEncrypted")
    nodoEncrypted.addEventListener("click", (evento) => {
        evento.preventDefault()
        let mensajeText = agarrarText.value
        if (mensajeText === "") {
            alert("escriba su texto para poder encriptarlo")
        } else if (/[^a-z ]/.test(mensajeText)) {
            alert("Solo se permiten letras minusculas y sin acento");
        } else {

            let cadenaNueva = mensajeText.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat")
            encryptMessage(cadenaNueva)
        }
    })


}

//agregar evento a botos para desenciptar
function decrypted() {
    let agarrarText = document.getElementById("textAreaUser")
    let nodoDecrypted = document.getElementById("btnDecrypted")

    nodoDecrypted.addEventListener("click", (evento) => {
        evento.preventDefault()
        let mensajeText = agarrarText.value
        if (mensajeText === "") {
            alert("escriba su texto para poder desencriptarlo")
        } else {
            let cadenaNueva = mensajeText.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u")
            decryptedMessage(cadenaNueva)
        }

    })


}

//agregar evento a boton copiar
function copy() {
    let nodoCopy = document.getElementById("copy")

    nodoCopy.addEventListener("click", () => {


        let content = document.getElementById('codingArea').innerText;
        if (content === "") {
            alert("no hay texto para")
        } else {
            navigator.clipboard.writeText(content)
            alert("copiado al portapapeles")
        }

    })



}


//cambiar texto e imagen en campo de encriptado
function encryptMessage(cadenaNueva) {
    let imagenNueva = document.getElementById("foundMessage")
    let agarrarImagen = document.getElementById("codingArea");
    agarrarImagen.innerHTML = `${cadenaNueva} `;
    imagenNueva.innerHTML = `<img  src="Imagenes/encriptador.jpg" id="tamañoImagen" alt="mensaje Encriptado">
                            <h2>mensaje encriptado</h2>`



}
//cambiar imagen y texto en campo de desencriptado
function decryptedMessage(cadenaNueva) {

    let imagenNueva = document.getElementById("foundMessage")
    let agarrarImagen = document.getElementById("codingArea");

    agarrarImagen.innerHTML = `${cadenaNueva} `;
    imagenNueva.innerHTML = `<img  src="Imagenes/desencriptar.jpeg" id="tamañoImagen" alt="Mensaje Desencriptado">
                            <h2>mensaje desencriptado</h2>`

}


encrypted()
decrypted()
copy()