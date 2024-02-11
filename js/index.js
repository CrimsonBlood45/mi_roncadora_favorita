var textos = ["Por queeeeeeeeee :(", "Pero va a haber sushi :/", "Te prometo que no te vas a decepcionar", "Porfavor di q sí :(", "Te compro chocolateeeees", "Te canto algo para q aceptes???", "Me voy a poner truste", "Se supone que le des al sí", "No creí que dirías que noooo :("]; // Lista de textos
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
    setTimeout(function() {
        // URL a la que se redireccionará
        var url = "https://www.ejemplo.com";
        // Abrir la URL en una nueva pestaña
        window.open(https://www.youtube.com/watch?v=NWT9sVXYgzc, "_blank");
    }, 2000);
}
