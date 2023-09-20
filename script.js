// Definimos un array con las rutas de las imágenes
var imagenes = ["Imagenes/art7.png", "Imagenes/art7-7.png"];
		
// Definimos la variable que llevará la cuenta del índice de la imagen actual
var indiceImagenActual = 0;

// Definimos la función que cambiará la imagen cada cierto tiempo
function cambiarImagen() {
    // Obtenemos el elemento img
    var imagen = document.getElementById("imagen");
    
    // Cambiamos el atributo src de la imagen
    imagen.src = imagenes[indiceImagenActual];
    
    // Aumentamos el índice de la imagen actual
    indiceImagenActual++;
    
    // Si llegamos al final del array de imágenes, volvemos al principio
    if (indiceImagenActual == imagenes.length) {
        indiceImagenActual = 0;
    }
}

// Llamamos a la función cambiarImagen cada 3 segundos (3000 milisegundos)
setInterval(cambiarImagen, 3000);