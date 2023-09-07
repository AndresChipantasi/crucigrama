// Array de URLs a las que quieres redirigir
var urls = [
    '/niveles/1.html',
    '/niveles/2.html',
    '/niveles/3.html',
];

function redireccionar() {
    // Generar un número aleatorio entre 0 y el número de URLs en el array
    var randomIndex = Math.floor(Math.random() * urls.length);

    // Redirigir a la URL aleatoria
    window.location.href = urls[randomIndex];
}