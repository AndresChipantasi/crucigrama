// Array de URLs a las que quieres redirigir
var urls = [
    '/niveles/5.html',
    '/niveles/6.html',
    '/niveles/7.html',
];

function redireccionar() {
    // Generar un número aleatorio entre 0 y el número de URLs en el array
    var randomIndex = Math.floor(Math.random() * urls.length);

    // Redirigir a la URL aleatoria
    window.location.href = urls[randomIndex];
}