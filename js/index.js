var textos = ["Por queeeeeeeeee :(", "Pero va a haber sushi :/", "Te prometo que no te vas a decepcionar", "Porfavor di q sí :(", "Te compro chocolateeeees"]; // Lista de textos
function cambiarTexto() {
    var texto = document.getElementById("texto");
    var indiceAleatorio = Math.floor(Math.random() * textos.length); // Genera un índice aleatorio
    texto.innerHTML = textos[indiceAleatorio]; // Selecciona un texto aleatorio y lo muestra
    var botonNo = document.getElementById("botonNo");
    var nuevaPosicionX = Math.floor(Math.random() * (window.innerWidth - 100));
    var nuevaPosicionY = Math.floor(Math.random() * (window.innerHeight - 100));
    botonNo.style.left = nuevaPosicionX + "px";
    botonNo.style.top = nuevaPosicionY + "px";
}
function cambiarPagina() {
    // Obtener el elemento de texto por su ID
    var texto = document.getElementById("texto");
    
    // Cambiar el contenido del texto
    texto.innerHTML = "Es una cita entoncesssssssssssss :)))";
    window.open("https://www.youtube.com/watch?v=NWT9sVXYgzc", "_blank");
}
