// Deshabilitar todos los campos
for (fila = 1; fila <= 10; fila++) {
  for (columna = 1; columna <= 13; columna++) {
    document.getElementById("fila" + fila + "C" + columna).readOnly = true;
  }
}

var palabra1_letra1 = document.getElementById("fila5C1");
var palabra1_letra2 = document.getElementById("fila5C2");
var palabra1_letra3 = document.getElementById("fila5C3");
var palabra1_letra4 = document.getElementById("fila5C4");
var palabra1_letra5 = document.getElementById("fila5C5");
var palabra1_letra6 = document.getElementById("fila5C6");
var palabra1_letra7 = document.getElementById("fila5C7");
var palabra1_letra8 = document.getElementById("fila5C8");
var palabra1_letra9 = document.getElementById("fila5C9");
var palabra1_letra10 = document.getElementById("fila5C10");
var palabra1_letra11 = document.getElementById("fila5C11");
var palabra1_letra12 = document.getElementById("fila5C12");
var palabra1_letra13 = document.getElementById("fila5C13");

var palabra2_letra1 = document.getElementById("fila8C5");
var palabra2_letra2 = document.getElementById("fila8C6");
var palabra2_letra3 = document.getElementById("fila8C7");
var palabra2_letra4 = document.getElementById("fila8C8");
var palabra2_letra5 = document.getElementById("fila8C9");

var palabra3_letra1 = document.getElementById("fila4C2");
var palabra3_letra2 = document.getElementById("fila5C2");
var palabra3_letra3 = document.getElementById("fila6C2");
var palabra3_letra4 = document.getElementById("fila7C2");
var palabra3_letra5 = document.getElementById("fila8C2");
var palabra3_letra6 = document.getElementById("fila9C2");

var palabra4_letra1 = document.getElementById("fila1C7");
var palabra4_letra2 = document.getElementById("fila2C7");
var palabra4_letra3 = document.getElementById("fila3C7");
var palabra4_letra4 = document.getElementById("fila4C7");
var palabra4_letra5 = document.getElementById("fila5C7");
var palabra4_letra6 = document.getElementById("fila6C7");
var palabra4_letra7 = document.getElementById("fila7C7");
var palabra4_letra8 = document.getElementById("fila8C7");

//Habilitar las casillas necesarias (Verticales)

palabra3_letra1.readOnly = false;
palabra3_letra2.readOnly = false;
palabra3_letra3.readOnly = false;
palabra3_letra4.readOnly = false;
palabra3_letra5.readOnly = false;
palabra3_letra6.readOnly = false;

palabra4_letra1.readOnly = false;
palabra4_letra2.readOnly = false;
palabra4_letra3.readOnly = false;
palabra4_letra4.readOnly = false;
palabra4_letra5.readOnly = false;
palabra4_letra6.readOnly = false;
palabra4_letra7.readOnly = false;
palabra4_letra8.readOnly = false;

//Habilitar las casillas necesarias (Horizontales)


palabra2_letra1.readOnly = false;
palabra2_letra2.readOnly = false;
palabra2_letra3.readOnly = false;
palabra2_letra4.readOnly = false;
palabra2_letra5.readOnly = false;

palabra1_letra1.readOnly = false;
palabra1_letra2.readOnly = false;
palabra1_letra3.readOnly = false;
palabra1_letra4.readOnly = false;
palabra1_letra5.readOnly = false;
palabra1_letra6.readOnly = false;
palabra1_letra7.readOnly = false;
palabra1_letra8.readOnly = false;
palabra1_letra9.readOnly = false;
palabra1_letra10.readOnly = false;
palabra1_letra11.readOnly = false;
palabra1_letra12.readOnly = false;
palabra1_letra13.readOnly = false;


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
    palabra1_letra9.value +
    palabra1_letra10.value +
    palabra1_letra11.value +
    palabra1_letra12.value +
    palabra1_letra13.value;

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
    palabra3_letra6.value;

    palabra4 =
    palabra4_letra1.value +
    palabra4_letra2.value +
    palabra4_letra3.value +
    palabra4_letra4.value +
    palabra4_letra5.value +
    palabra4_letra6.value +
    palabra4_letra7.value +
    palabra4_letra8.value;

    if (
    palabra1.toLowerCase() == "hiperglucemia" &&
    palabra2.toLowerCase() == "brazo" &&
    palabra3.toLowerCase() == "pierna" &&
    palabra4.toLowerCase() == "ensalada"
    ) {
    document.getElementById("mensaje").innerHTML = "<h2>Ganaste</h2>";
    document.getElementById("mensaje").style.fontSize = "24px";
    document.getElementById("mensaje").className = "alert alert-success";
    } else {
    if (palabra1.toLowerCase() != "hiperglucemia") {
        palabra1_letra1.value = "";
        palabra1_letra2.value = "";
        palabra1_letra3.value = "";
        palabra1_letra4.value = "";
        palabra1_letra5.value = "";
        palabra1_letra6.value = "";
        palabra1_letra7.value = "";
        palabra1_letra8.value = "";
        palabra1_letra9.value = "";
        palabra1_letra10.value = "";
        palabra1_letra11.value = "";
        palabra1_letra12.value = "";
        palabra1_letra13.value = "";
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

    if (palabra3.toLowerCase() != "pierna") {
        palabra3_letra1.value = "";
        palabra3_letra2.value = "";
        palabra3_letra3.value = "";
        palabra3_letra4.value = "";
        palabra3_letra5.value = "";
        palabra3_letra6.value = "";
        error();
    }

    if (palabra4.toLowerCase() != "ensalada") {
        palabra4_letra1.value = "";
        palabra4_letra2.value = "";
        palabra4_letra3.value = "";
        palabra4_letra4.value = "";
        palabra4_letra5.value = "";
        palabra4_letra6.value = "";
        palabra4_letra7.value = "";
        palabra4_letra8.value = "";
        error();
    }

    //corrector de palabras//

    if (palabra1.toLowerCase() == "hiperglucemia") {
        palabra1_letra2.value = "i";
        palabra1_letra7.value = "l";
    }
    if (palabra2.toLowerCase() == "brazo") {
        palabra2_letra3.value = "a";
    }
    if (palabra3.toLowerCase() == "pierna") {
        palabra3_letra2.value = "i";
    }
    if (palabra4.toLowerCase() == "ensalada") {
        palabra4_letra5.value = "l";
        palabra4_letra8.value = "a";
    }
    }
    
}
