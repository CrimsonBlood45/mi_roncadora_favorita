var textos = ["Por queeeeeeeeee :(", "Pero va a haber sushi :/", "Te prometo que no te vas a decepcionar", "Porfavor di q sí :(", "Te compro chocolateeeees", "Te canto algo para q aceptes???", "Me voy a poner truste", "Se supone que le des al sí", "No creí que dirías que noooo :("]; // Lista de textos
function cambiarTexto() {
    var texto = document.getElementById("texto");
    var indiceAleatorio = Math.floor(Math.random() * textos.length); // Genera un índice aleatorio
    texto.innerHTML = textos[indiceAleatorio]; // Selecciona un texto aleatorio y lo muestra
    var contenedor = document.querySelector('.contenedor');
    var boton = document.querySelector('.botonNo');
    
    // Generamos nuevas coordenadas aleatorias dentro del contenedor
    var nuevoTop = Math.random() * (contenedor.offsetHeight - boton.offsetHeight);
    var nuevoLeft = Math.random() * (contenedor.offsetWidth - boton.offsetWidth);
    
    // Aplicamos las nuevas coordenadas al botón
    boton.style.top = nuevoTop + 'px';
    boton.style.left = nuevoLeft + 'px';
}
function cambiarPagina() {
    // Obtener el elemento de texto por su ID
    var texto = document.getElementById("texto");
    
    // Cambiar el contenido del texto
    texto.innerHTML = "Es una cita entoncesssssssssssss :)))";
    setTimeout(function() {
        // El código que quieres ejecutar después de la espera
        window.open("https://www.youtube.com/watch?v=NWT9sVXYgzc", "_blank");
    }, 800);
}
