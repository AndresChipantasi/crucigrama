var urls = [
    '/niveles/1.html',
    '/niveles/3.html',
];

// Deshabilitar todos los campos
for (fila = 1; fila <= 15; fila++) {
    for (columna = 1; columna <= 15; columna++) {
    document.getElementById("fila" + fila + "C" + columna).readOnly = true;
    }
}
var numeral1 = document.getElementById("fila6C5");
var numeral2 = document.getElementById("fila5C8");
var numeral3 = document.getElementById("fila2C10");
var numeral4 = document.getElementById("fila1C13");
var numeral5 = document.getElementById("fila6C5");
var numeral6 = document.getElementById("fila8C2");
var numeral7 = document.getElementById("fila14C1");

numeral1.value = "1";
numeral2.value = "2";
numeral3.value = "3";
numeral4.value = "4";
numeral5.value = "1";
numeral6.value = "2";
numeral7.value = "3";

var palabra1_letra1 = document.getElementById("fila7C5");
var palabra1_letra2 = document.getElementById("fila8C5");
var palabra1_letra3 = document.getElementById("fila9C5");
var palabra1_letra4 = document.getElementById("fila10C5");
var palabra1_letra5 = document.getElementById("fila11C5");
var palabra1_letra6 = document.getElementById("fila12C5");
var palabra1_letra7 = document.getElementById("fila13C5");
var palabra1_letra8 = document.getElementById("fila14C5");

var palabra2_letra1 = document.getElementById("fila6C8");
var palabra2_letra2 = document.getElementById("fila7C8");
var palabra2_letra3 = document.getElementById("fila8C8");
var palabra2_letra4 = document.getElementById("fila9C8");
var palabra2_letra5 = document.getElementById("fila10C8");

var palabra3_letra1 = document.getElementById("fila3C10");
var palabra3_letra2 = document.getElementById("fila4C10");
var palabra3_letra3 = document.getElementById("fila5C10");
var palabra3_letra4 = document.getElementById("fila6C10");
var palabra3_letra5 = document.getElementById("fila7C10");
var palabra3_letra6 = document.getElementById("fila8C10");
var palabra3_letra7 = document.getElementById("fila9C10");
var palabra3_letra8 = document.getElementById("fila10C10");

var palabra4_letra1 = document.getElementById("fila2C13");
var palabra4_letra2 = document.getElementById("fila3C13");
var palabra4_letra3 = document.getElementById("fila4C13");
var palabra4_letra4 = document.getElementById("fila5C13");
var palabra4_letra5 = document.getElementById("fila6C13");
var palabra4_letra6 = document.getElementById("fila7C13");
var palabra4_letra7 = document.getElementById("fila8C13");
var palabra4_letra8 = document.getElementById("fila9C13");
var palabra4_letra9 = document.getElementById("fila10C13");
var palabra4_letra10 = document.getElementById("fila11C13");
var palabra4_letra11 = document.getElementById("fila12C13");
var palabra4_letra12 = document.getElementById("fila13C13");
var palabra4_letra13 = document.getElementById("fila14C13");

var palabra5_letra1 = document.getElementById("fila6C6");
var palabra5_letra2 = document.getElementById("fila6C7");
var palabra5_letra3 = document.getElementById("fila6C8");
var palabra5_letra4 = document.getElementById("fila6C9");
var palabra5_letra5 = document.getElementById("fila6C10");

var palabra6_letra1 = document.getElementById("fila8C3");
var palabra6_letra2 = document.getElementById("fila8C4");
var palabra6_letra3 = document.getElementById("fila8C5");
var palabra6_letra4 = document.getElementById("fila8C6");
var palabra6_letra5 = document.getElementById("fila8C7");
var palabra6_letra6 = document.getElementById("fila8C8");

var palabra7_letra1 = document.getElementById("fila14C2");
var palabra7_letra2 = document.getElementById("fila14C3");
var palabra7_letra3 = document.getElementById("fila14C4");
var palabra7_letra4 = document.getElementById("fila14C5");
var palabra7_letra5 = document.getElementById("fila14C6");
var palabra7_letra6 = document.getElementById("fila14C7");
var palabra7_letra7 = document.getElementById("fila14C8");
var palabra7_letra8 = document.getElementById("fila14C9");
var palabra7_letra9 = document.getElementById("fila14C10");
var palabra7_letra10 = document.getElementById("fila14C11");
var palabra7_letra11 = document.getElementById("fila14C12");
var palabra7_letra12 = document.getElementById("fila14C13");

//Habilitar las casillas necesarias (Verticales)

palabra1_letra1.readOnly = false;
palabra1_letra2.readOnly = false;
palabra1_letra3.readOnly = false;
palabra1_letra4.readOnly = false;
palabra1_letra5.readOnly = false;
palabra1_letra6.readOnly = false;
palabra1_letra7.readOnly = false;
palabra1_letra8.readOnly = false;

palabra2_letra1.readOnly = false;
palabra2_letra2.readOnly = false;
palabra2_letra3.readOnly = false;
palabra2_letra4.readOnly = false;
palabra2_letra5.readOnly = false;

palabra3_letra1.readOnly = false;
palabra3_letra2.readOnly = false;
palabra3_letra3.readOnly = false;
palabra3_letra4.readOnly = false;
palabra3_letra5.readOnly = false;
palabra3_letra6.readOnly = false;
palabra3_letra7.readOnly = false;
palabra3_letra8.readOnly = false;

palabra4_letra1.readOnly = false;
palabra4_letra2.readOnly = false;
palabra4_letra3.readOnly = false;
palabra4_letra4.readOnly = false;
palabra4_letra5.readOnly = false;
palabra4_letra6.readOnly = false;
palabra4_letra7.readOnly = false;
palabra4_letra8.readOnly = false;
palabra4_letra9.readOnly = false;
palabra4_letra10.readOnly = false;
palabra4_letra11.readOnly = false;
palabra4_letra12.readOnly = false;
palabra4_letra13.readOnly = false;

//Habilitar las casillas necesarias (Horizontales)

palabra5_letra1.readOnly = false;
palabra5_letra2.readOnly = false;
palabra5_letra3.readOnly = false;
palabra5_letra4.readOnly = false;
palabra5_letra5.readOnly = false;

palabra6_letra1.readOnly = false;
palabra6_letra2.readOnly = false;
palabra6_letra3.readOnly = false;
palabra6_letra4.readOnly = false;
palabra6_letra5.readOnly = false;
palabra6_letra6.readOnly = false;

palabra7_letra1.readOnly = false;
palabra7_letra2.readOnly = false;
palabra7_letra3.readOnly = false;
palabra7_letra4.readOnly = false;
palabra7_letra5.readOnly = false;
palabra7_letra6.readOnly = false;
palabra7_letra7.readOnly = false;
palabra7_letra8.readOnly = false;
palabra7_letra9.readOnly = false;
palabra7_letra10.readOnly = false;
palabra7_letra11.readOnly = false;
palabra7_letra12.readOnly = false;

for (fila = 1; fila <= 15; fila++) {
    for (columna = 1; columna <= 15; columna++) {
    if (
        document.getElementById("fila" + fila + "C" + columna).readOnly == false
    ) {
        document.getElementById(
        "fila" + fila + "C" + columna
        ).style.backgroundColor = "cyan";
    }
    }
}

var errorActivo = 0;

function error() {
    document.getElementById("mensaje").innerHTML = "<h1>Hay palabras incorrectas!</h1>";
    document.getElementById("mensaje").className = "alert alert-danger";
    errorActivo = 1;
}

//esta funcion es para ejecutarse cada 5 segundos
setInterval("ocultarError()", 5000);

function ocultarError() {
    if (errorActivo == 1) {
    document.getElementById("mensaje").innerHTML = "";
    document.getElementById("mensaje").className = "";
    errorActivo = 0;
    }
}

function verificar() {
    document.getElementById("mensaje").innerHTML = "";
    palabra1 =
    palabra1_letra1.value +
    palabra1_letra2.value +
    palabra1_letra3.value +
    palabra1_letra4.value +
    palabra1_letra5.value +
    palabra1_letra6.value +
    palabra1_letra7.value +
    palabra1_letra8.value;

    palabra2 =
    palabra2_letra1.value +
    palabra2_letra2.value +
    palabra2_letra3.value +
    palabra2_letra4.value +
    palabra2_letra5.value;

    palabra3 =
    palabra3_letra1.value +
    palabra3_letra2.value +
    palabra3_letra3.value +
    palabra3_letra4.value +
    palabra3_letra5.value +
    palabra3_letra6.value +
    palabra3_letra7.value +
    palabra3_letra8.value;

    palabra4 =
    palabra4_letra1.value +
    palabra4_letra2.value +
    palabra4_letra3.value +
    palabra4_letra4.value +
    palabra4_letra5.value +
    palabra4_letra6.value +
    palabra4_letra7.value +
    palabra4_letra8.value +
    palabra4_letra9.value +
    palabra4_letra10.value +
    palabra4_letra11.value +
    palabra4_letra12.value +
    palabra4_letra13.value;

    palabra5 =
    palabra5_letra1.value +
    palabra5_letra2.value +
    palabra5_letra3.value +
    palabra5_letra4.value +
    palabra5_letra5.value;

    palabra6 =
    palabra6_letra1.value +
    palabra6_letra2.value +
    palabra6_letra3.value +
    palabra6_letra4.value +
    palabra6_letra5.value +
    palabra6_letra6.value;

    palabra7 =
    palabra7_letra1.value +
    palabra7_letra2.value +
    palabra7_letra3.value +
    palabra7_letra4.value +
    palabra7_letra5.value +
    palabra7_letra6.value +
    palabra7_letra7.value +
    palabra7_letra8.value +
    palabra7_letra9.value +
    palabra7_letra10.value +
    palabra7_letra11.value +
    palabra7_letra12.value;

    if (
    palabra1.toLowerCase() == "desayuno" &&
    palabra2.toLowerCase() == "brazo" &&
    palabra3.toLowerCase() == "ensalada" &&
    palabra4.toLowerCase() == "hiperglucemia" &&
    palabra5.toLowerCase() == "fibra" &&
    palabra6.toLowerCase() == "pierna" &&
    palabra7.toLowerCase() == "hipoglucemia"
    ) {
        document.getElementById("mensaje1").innerHTML = "<h1>Felicidades Ganaste!!!</h1>";
        document.getElementById("mensaje1").style.fontSize = "24px";
        document.getElementById("mensaje1").className = "alert";
    
        // Generar un número aleatorio entre 0 y el número de URLs en el array
        const randomIndex = Math.floor(Math.random() * urls.length);
        setTimeout(function() {
            window.location.href = urls[randomIndex]; // Redirigir a la URL aleatoria
            }, 3000);
        
    } else {
    if (palabra1.toLowerCase() != "desayuno") {
        palabra1_letra1.value = "";
        palabra1_letra2.value = "";
        palabra1_letra3.value = "";
        palabra1_letra4.value = "";
        palabra1_letra5.value = "";
        palabra1_letra6.value = "";
        palabra1_letra7.value = "";
        palabra1_letra8.value = "";
        error();
    }

    if (palabra2.toLowerCase() != "brazo") {
        palabra2_letra1.value = "";
        palabra2_letra2.value = "";
        palabra2_letra3.value = "";
        palabra2_letra4.value = "";
        palabra2_letra5.value = "";
        error();
    }

    if (palabra3.toLowerCase() != "ensalada") {
        palabra3_letra1.value = "";
        palabra3_letra2.value = "";
        palabra3_letra3.value = "";
        palabra3_letra4.value = "";
        palabra3_letra5.value = "";
        palabra3_letra6.value = "";
        palabra3_letra7.value = "";
        palabra3_letra8.value = "";
        error();
    }

    if (palabra4.toLowerCase() != "hiperglucemia") {
        palabra4_letra1.value = "";
        palabra4_letra2.value = "";
        palabra4_letra3.value = "";
        palabra4_letra4.value = "";
        palabra4_letra5.value = "";
        palabra4_letra6.value = "";
        palabra4_letra7.value = "";
        palabra4_letra8.value = "";
        palabra4_letra9.value = "";
        palabra4_letra10.value = "";
        palabra4_letra11.value = "";
        palabra4_letra12.value = "";
        palabra4_letra13.value = "";
        error();
    }

    if (palabra5.toLowerCase() != "fibra") {
        palabra5_letra1.value = "";
        palabra5_letra2.value = "";
        palabra5_letra3.value = "";
        palabra5_letra4.value = "";
        palabra5_letra5.value = "";
        error();
    }

    if (palabra6.toLowerCase() != "pierna") {
        palabra6_letra1.value = "";
        palabra6_letra2.value = "";
        palabra6_letra3.value = "";
        palabra6_letra4.value = "";
        palabra6_letra5.value = "";
        palabra6_letra6.value = "";
        error();
    }

    if (palabra7.toLowerCase() != "hipoglucemia") {
        palabra7_letra1.value = "";
        palabra7_letra2.value = "";
        palabra7_letra3.value = "";
        palabra7_letra4.value = "";
        palabra7_letra5.value = "";
        palabra7_letra6.value = "";
        palabra7_letra7.value = "";
        palabra7_letra8.value = "";
        palabra7_letra9.value = "";
        palabra7_letra10.value = "";
        palabra7_letra11.value = "";
        palabra7_letra12.value = "";
        error();
    }

    //corrector de palabras//

    if (palabra1.toLowerCase() == "desayuno") {
        palabra1_letra2.value = "e";
        palabra1_letra8.value = "o";
    }
    if (palabra2.toLowerCase() == "brazo") {
        palabra2_letra1.value = "b";
        palabra2_letra3.value = "a";
    }
    if (palabra3.toLowerCase() == "ensalada") {
        palabra3_letra4.value = "a";
    }
    if (palabra4.toLowerCase() == "hiperglucemia") {
        palabra4_letra13.value = "a";
    }
    if (palabra5.toLowerCase() == "fibra") {
        palabra5_letra3.value = "b";
        palabra5_letra5.value = "a";
    }
    if (palabra6.toLowerCase() == "pierna") {
        palabra6_letra3.value = "e";
        palabra6_letra6.value = "a";
    }
    if (palabra7.toLowerCase() == "hipoglucemia") {
        palabra7_letra4.value = "o";
        palabra7_letra12.value = "a";
    }
    }
    
}
