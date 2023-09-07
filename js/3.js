var urls = [
    '/niveles/1.html',
    '/niveles/2.html',
];

// Deshabilitar todos los campos
for (fila = 1; fila <= 15; fila++) {
    for (columna = 1; columna <= 15; columna++) {
    document.getElementById("fila" + fila + "C" + columna).readOnly = true;
    }
}
var numeral1 = document.getElementById("fila8C5");
var numeral2 = document.getElementById("fila4C8");
var numeral3 = document.getElementById("fila2C10");
var numeral4 = document.getElementById("fila6C12");
var numeral5 = document.getElementById("fila3C4");
var numeral6 = document.getElementById("fila5C5");
var numeral7 = document.getElementById("fila10C3");
var numeral8 = document.getElementById("fila13C3");

numeral1.value = "1";
numeral2.value = "2";
numeral3.value = "3";
numeral4.value = "4";
numeral5.value = "1";
numeral6.value = "2";
numeral7.value = "3";
numeral8.value = "4";

var palabra1_letra1 = document.getElementById("fila9C5");
var palabra1_letra2 = document.getElementById("fila10C5");
var palabra1_letra3 = document.getElementById("fila11C5");
var palabra1_letra4 = document.getElementById("fila12C5");
var palabra1_letra5 = document.getElementById("fila13C5");

var palabra2_letra1 = document.getElementById("fila5C8");
var palabra2_letra2 = document.getElementById("fila6C8");
var palabra2_letra3 = document.getElementById("fila7C8");
var palabra2_letra4 = document.getElementById("fila8C8");
var palabra2_letra5 = document.getElementById("fila9C8");
var palabra2_letra6 = document.getElementById("fila10C8");

var palabra3_letra1 = document.getElementById("fila3C10");
var palabra3_letra2 = document.getElementById("fila4C10");
var palabra3_letra3 = document.getElementById("fila5C10");
var palabra3_letra4 = document.getElementById("fila6C10");
var palabra3_letra5 = document.getElementById("fila7C10");
var palabra3_letra6 = document.getElementById("fila8C10");
var palabra3_letra7 = document.getElementById("fila9C10");
var palabra3_letra8 = document.getElementById("fila10C10");

var palabra4_letra1 = document.getElementById("fila7C12");
var palabra4_letra2 = document.getElementById("fila8C12");
var palabra4_letra3 = document.getElementById("fila9C12");
var palabra4_letra4 = document.getElementById("fila10C12");
var palabra4_letra5 = document.getElementById("fila11C12");

var palabra5_letra1 = document.getElementById("fila3C5");
var palabra5_letra2 = document.getElementById("fila3C6");
var palabra5_letra3 = document.getElementById("fila3C7");
var palabra5_letra4 = document.getElementById("fila3C8");
var palabra5_letra5 = document.getElementById("fila3C9");
var palabra5_letra6 = document.getElementById("fila3C10");
var palabra5_letra7 = document.getElementById("fila3C11");

var palabra6_letra1 = document.getElementById("fila5C6");
var palabra6_letra2 = document.getElementById("fila5C7");
var palabra6_letra3 = document.getElementById("fila5C8");

var palabra7_letra1 = document.getElementById("fila10C4");
var palabra7_letra2 = document.getElementById("fila10C5");
var palabra7_letra3 = document.getElementById("fila10C6");
var palabra7_letra4 = document.getElementById("fila10C7");
var palabra7_letra5 = document.getElementById("fila10C8");
var palabra7_letra6 = document.getElementById("fila10C9");
var palabra7_letra7 = document.getElementById("fila10C10");
var palabra7_letra8 = document.getElementById("fila10C11");
var palabra7_letra9 = document.getElementById("fila10C12");

var palabra8_letra1 = document.getElementById("fila13C4");
var palabra8_letra2 = document.getElementById("fila13C5");
var palabra8_letra3 = document.getElementById("fila13C6");

//Habilitar las casillas necesarias (Verticales)

palabra1_letra1.readOnly = false;
palabra1_letra2.readOnly = false;
palabra1_letra3.readOnly = false;
palabra1_letra4.readOnly = false;
palabra1_letra5.readOnly = false;

palabra2_letra1.readOnly = false;
palabra2_letra2.readOnly = false;
palabra2_letra3.readOnly = false;
palabra2_letra4.readOnly = false;
palabra2_letra5.readOnly = false;
palabra2_letra6.readOnly = false;

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

//Habilitar las casillas necesarias (Horizontales)

palabra5_letra1.readOnly = false;
palabra5_letra2.readOnly = false;
palabra5_letra3.readOnly = false;
palabra5_letra4.readOnly = false;
palabra5_letra5.readOnly = false;
palabra5_letra6.readOnly = false;
palabra5_letra7.readOnly = false;

palabra6_letra1.readOnly = false;
palabra6_letra2.readOnly = false;
palabra6_letra3.readOnly = false;

palabra7_letra1.readOnly = false;
palabra7_letra2.readOnly = false;
palabra7_letra3.readOnly = false;
palabra7_letra4.readOnly = false;
palabra7_letra5.readOnly = false;
palabra7_letra6.readOnly = false;
palabra7_letra7.readOnly = false;
palabra7_letra8.readOnly = false;
palabra7_letra9.readOnly = false;

palabra8_letra1.readOnly = false;
palabra8_letra2.readOnly = false;
palabra8_letra3.readOnly = false;

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
    palabra1_letra5.value;

    palabra2 =
    palabra2_letra1.value +
    palabra2_letra2.value +
    palabra2_letra3.value +
    palabra2_letra4.value +
    palabra2_letra5.value +
    palabra2_letra6.value;

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
    palabra4_letra5.value;

    palabra5 =
    palabra5_letra1.value +
    palabra5_letra2.value +
    palabra5_letra3.value +
    palabra5_letra4.value +
    palabra5_letra5.value +
    palabra5_letra6.value +
    palabra5_letra7.value;

    palabra6 =
    palabra6_letra1.value +
    palabra6_letra2.value +
    palabra6_letra3.value;

    palabra7 =
    palabra7_letra1.value +
    palabra7_letra2.value +
    palabra7_letra3.value +
    palabra7_letra4.value +
    palabra7_letra5.value +
    palabra7_letra6.value +
    palabra7_letra7.value +
    palabra7_letra8.value +
    palabra7_letra9.value;

    palabra8 =
    palabra8_letra1.value +
    palabra8_letra2.value +
    palabra8_letra3.value;

    if (
    palabra1.toLowerCase() == "fruta" &&
    palabra2.toLowerCase() == "hambre" &&
    palabra3.toLowerCase() == "glucagon" &&
    palabra4.toLowerCase() == "queso" &&
    palabra5.toLowerCase() == "jeringa" &&
    palabra6.toLowerCase() == "nph" &&
    palabra7.toLowerCase() == "proteinas" &&
    palabra8.toLowerCase() == "pan"
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
    if (palabra1.toLowerCase() != "fruta") {
        palabra1_letra1.value = "";
        palabra1_letra2.value = "";
        palabra1_letra3.value = "";
        palabra1_letra4.value = "";
        palabra1_letra5.value = "";
        error();
    }

    if (palabra2.toLowerCase() != "hambre") {
        palabra2_letra1.value = "";
        palabra2_letra2.value = "";
        palabra2_letra3.value = "";
        palabra2_letra4.value = "";
        palabra2_letra5.value = "";
        palabra2_letra6.value = "";
        error();
    }

    if (palabra3.toLowerCase() != "glucagon") {
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

    if (palabra4.toLowerCase() != "queso") {
        palabra4_letra1.value = "";
        palabra4_letra2.value = "";
        palabra4_letra3.value = "";
        palabra4_letra4.value = "";
        palabra4_letra5.value = "";
        error();
    }

    if (palabra5.toLowerCase() != "jeringa") {
        palabra5_letra1.value = "";
        palabra5_letra2.value = "";
        palabra5_letra3.value = "";
        palabra5_letra4.value = "";
        palabra5_letra5.value = "";
        palabra5_letra6.value = "";
        palabra5_letra7.value = "";
        error();
    }

    if (palabra6.toLowerCase() != "nph") {
        palabra6_letra1.value = "";
        palabra6_letra2.value = "";
        palabra6_letra3.value = "";
        error();
    }

    if (palabra7.toLowerCase() != "proteinas") {
        palabra7_letra1.value = "";
        palabra7_letra2.value = "";
        palabra7_letra3.value = "";
        palabra7_letra4.value = "";
        palabra7_letra5.value = "";
        palabra7_letra6.value = "";
        palabra7_letra7.value = "";
        palabra7_letra8.value = "";
        palabra7_letra9.value = "";
        error();
    }

    if (palabra8.toLowerCase() != "pan") {
        palabra8_letra1.value = "";
        palabra8_letra2.value = "";
        palabra8_letra3.value = "";
        error();
    }

    //corrector de palabras//

    if (palabra1.toLowerCase() == "fruta") {
        palabra1_letra2.value = "r";
        palabra1_letra5.value = "a";
    }
    if (palabra2.toLowerCase() == "hambre") {
        palabra2_letra1.value = "h";
        palabra2_letra6.value = "e";
    }
    if (palabra3.toLowerCase() == "glucagon") {
        palabra3_letra1.value = "g";
        palabra3_letra8.value = "n";
    }
    if (palabra4.toLowerCase() == "queso") {
        palabra4_letra4.value = "s";
    }
    if (palabra5.toLowerCase() == "jeringa") {
        palabra5_letra6.value = "g";
    }
    if (palabra6.toLowerCase() == "nph") {
        palabra6_letra3.value = "h";
    }
    if (palabra7.toLowerCase() == "proteinas") {
        palabra7_letra2.value = "r";
        palabra7_letra5.value = "e";
        palabra7_letra7.value = "n";
        palabra7_letra9.value = "s";
    }
    if (palabra8.toLowerCase() == "pan") {
        palabra8_letra2.value = "a";
    }
    }
    
}
