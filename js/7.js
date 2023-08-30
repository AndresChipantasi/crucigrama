// Deshabilitar todos los campos
for (fila = 1; fila <= 10; fila++) {
    for (columna = 1; columna <= 13; columna++) {
    document.getElementById("fila" + fila + "C" + columna).readOnly = true;
    }
}

var palabra1_letra1 = document.getElementById("fila5C3");
var palabra1_letra2 = document.getElementById("fila5C4");
var palabra1_letra3 = document.getElementById("fila5C5");
var palabra1_letra4 = document.getElementById("fila5C6");
var palabra1_letra5 = document.getElementById("fila5C7");
var palabra1_letra6 = document.getElementById("fila5C8");
var palabra1_letra7 = document.getElementById("fila5C9");
var palabra1_letra8 = document.getElementById("fila5C10");
var palabra1_letra9 = document.getElementById("fila5C11");

var palabra2_letra1 = document.getElementById("fila3C7");
var palabra2_letra2 = document.getElementById("fila4C7");
var palabra2_letra3 = document.getElementById("fila5C7");
var palabra2_letra4 = document.getElementById("fila6C7");
var palabra2_letra5 = document.getElementById("fila7C7");

var palabra3_letra1 = document.getElementById("fila4C10");
var palabra3_letra2 = document.getElementById("fila5C10");
var palabra3_letra3 = document.getElementById("fila6C10");

//Habilitar las casillas necesarias (Verticales)

palabra2_letra1.readOnly = false;
palabra2_letra2.readOnly = false;
palabra2_letra3.readOnly = false;
palabra2_letra4.readOnly = false;
palabra2_letra5.readOnly = false;

palabra3_letra1.readOnly = false;
palabra3_letra2.readOnly = false;
palabra3_letra3.readOnly = false;

//Habilitar las casillas necesarias (Horizontales)

palabra1_letra1.readOnly = false;
palabra1_letra2.readOnly = false;
palabra1_letra3.readOnly = false;
palabra1_letra4.readOnly = false;
palabra1_letra5.readOnly = false;
palabra1_letra6.readOnly = false;
palabra1_letra7.readOnly = false;
palabra1_letra8.readOnly = false;
palabra1_letra9.readOnly = false;

for (fila = 1; fila <= 10; fila++) {
    for (columna = 1; columna <= 13; columna++) {
    if (
        document.getElementById("fila" + fila + "C" + columna).readOnly == false
    ) {
        document.getElementById(
        "fila" + fila + "C" + columna
        ).style.backgroundColor = "#07c7e6";
    }
    }
}

var errorActivo = 0;

function error() {
    document.getElementById("mensaje").innerHTML =
    "<h2>Existen palabras malas</h2>";
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
    palabra1_letra8.value +
    palabra1_letra9.value;

    palabra2 =
    palabra2_letra1.value +
    palabra2_letra2.value +
    palabra2_letra3.value +
    palabra2_letra4.value +
    palabra2_letra5.value;

    palabra3 =
    palabra3_letra1.value +
    palabra3_letra2.value +
    palabra3_letra3.value;

    if (
    palabra1.toLowerCase() == "proteinas" &&
    palabra2.toLowerCase() == "queso" &&
    palabra3.toLowerCase() == "pan"
    ) {
    document.getElementById("mensaje").innerHTML = "Ganaste";
    document.getElementById("mensaje").style.fontSize = "24px";
    document.getElementById("mensaje").className = "alert alert-success";
    document.getElementById("mensaje").backgroundColor = "green";
    } else {
    if (palabra1.toLowerCase() != "proteinas") {
        palabra1_letra1.value = "";
        palabra1_letra2.value = "";
        palabra1_letra3.value = "";
        palabra1_letra4.value = "";
        palabra1_letra5.value = "";
        palabra1_letra6.value = "";
        palabra1_letra7.value = "";
        palabra1_letra8.value = "";
        palabra1_letra9.value = "";
        error();
    }

    if (palabra2.toLowerCase() != "queso") {
        palabra2_letra1.value = "";
        palabra2_letra2.value = "";
        palabra2_letra3.value = "";
        palabra2_letra4.value = "";
        palabra2_letra5.value = "";
        error();
    }

    if (palabra3.toLowerCase() != "pan") {
        palabra3_letra1.value = "";
        palabra3_letra2.value = "";
        palabra3_letra3.value = "";
        error();
    }
    //corrector de palabras//
    
    if (palabra1.toLowerCase() == "proteinas") {
        palabra1_letra5.value = "e";
        palabra1_letra8.value = "a";
    }
    if (palabra2.toLowerCase() == "queso") {
        palabra2_letra3.value = "e";
    }
    if (palabra3.toLowerCase() == "pan") {
        palabra3_letra2.value = "a";
    }
    }
}
