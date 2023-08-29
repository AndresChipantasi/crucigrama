// Deshabilitar todos los campos
for(fila=1; fila<=5; fila++){
    for(columna=1;columna<=6;columna++){
    document.getElementById("fila"+fila+"C"+columna).readOnly=true;
    }
}

var palabra1_letra1 = document.getElementById("fila2C1");
var palabra1_letra2 = document.getElementById("fila2C2");
var palabra1_letra3 = document.getElementById("fila2C3");
var palabra1_letra4 = document.getElementById("fila2C4");
var palabra1_letra5 = document.getElementById("fila2C5");
var palabra1_letra6 = document.getElementById("fila2C6");

var palabra2_letra1 = document.getElementById("fila4C1");
var palabra2_letra2 = document.getElementById("fila4C2");
var palabra2_letra3 = document.getElementById("fila4C3");
var palabra2_letra4 = document.getElementById("fila4C4");
var palabra2_letra5 = document.getElementById("fila4C5");
var palabra2_letra6 = document.getElementById("fila4C6");

var palabra5_letra1 = document.getElementById("fila1C2");
var palabra5_letra2 = document.getElementById("fila2C2");
var palabra5_letra3 = document.getElementById("fila3C2");
var palabra5_letra4 = document.getElementById("fila4C2");
var palabra5_letra5 = document.getElementById("fila5C2");



//Habilitar las casillas necesarias (Verticales)


palabra5_letra1.readOnly =false;
palabra5_letra2.readOnly =false;
palabra5_letra3.readOnly =false;
palabra5_letra4.readOnly =false;
palabra5_letra5.readOnly =false;

//Habilitar las casillas necesarias (Horizontales)

palabra1_letra1.readOnly =false;
palabra1_letra2.readOnly =false;
palabra1_letra3.readOnly =false;
palabra1_letra4.readOnly =false;
palabra1_letra5.readOnly =false;
palabra1_letra6.readOnly =false;

palabra2_letra1.readOnly =false;
palabra2_letra2.readOnly =false;
palabra2_letra3.readOnly =false;
palabra2_letra4.readOnly =false;
palabra2_letra5.readOnly =false;
palabra2_letra6.readOnly =false;


for(fila=1; fila<=5; fila++){
    for(columna=1;columna<=6;columna++){
    if(document.getElementById("fila"+ fila +"C" + columna).readOnly==false){
        document.getElementById("fila"+ fila +"C" + columna).style.backgroundColor="#07c7e6";
    }
    }
}

var errorActivo=0;
function error(){
    document.getElementById("mensaje").innerHTML="<h2>Existen palabras malas</h2>";
    document.getElementById("mensaje").className="alert alert-danger";
    errorActivo=1;
}

//esta funcion es para ejecutarse cada 5 segundos
setInterval('ocultarError()',5000);

function ocultarError(){
    if(errorActivo==1){
    document.getElementById("mensaje").innerHTML="";
    document.getElementById("mensaje").className="";
    errorActivo=0;
    }
}

function verificar(){
    document.getElementById("mensaje").innerHTML="";
    palabra1 = palabra1_letra1.value + palabra1_letra2.value + palabra1_letra3.value + palabra1_letra4.value + palabra1_letra5.value + palabra1_letra6.value; 

    palabra2 = palabra2_letra1.value + palabra2_letra2.value + palabra2_letra3.value + palabra2_letra4.value + palabra2_letra5.value + palabra2_letra6.value;

    palabra5 = palabra5_letra5.value + palabra5_letra4.value + palabra5_letra3.value + palabra5_letra2.value + palabra5_letra1.value;

    if(palabra1.toLowerCase()=="grasas" && palabra2.toLowerCase()=="higado" && palabra5.toLowerCase()=="fibra"){
    document.getElementById("mensaje").innerHTML="Ganaste";
    document.getElementById("mensaje").style.fontSize="24px";
    document.getElementById("mensaje").className="alert alert-success";
    document.getElementById("mensaje").backgroundColor="green";
    }else{
    if(palabra1.toLowerCase()!="grasas"){
        palabra1_letra1.value="";
        palabra1_letra2.value="";
        palabra1_letra3.value="";
        palabra1_letra4.value="";
        palabra1_letra5.value="";
        palabra1_letra6.value="";
        error();
    }

    if(palabra2.toLowerCase()!="higado"){
        palabra2_letra1.value="";
        palabra2_letra2.value="";
        palabra2_letra3.value="";
        palabra2_letra4.value="";
        palabra2_letra5.value="";
        palabra2_letra6.value="";
        error();
    }

    if(palabra5.toLowerCase()!="mellitus"){
        palabra5_letra1.value="";
        palabra5_letra2.value="";
        palabra5_letra3.value="";
        palabra5_letra4.value="";
        palabra5_letra5.value="";
        palabra5_letra6.value="";
        palabra5_letra7.value="";
        palabra5_letra8.value="";
        error();
        }
        //corrector de palabras//
        if(palabra1.tolowerCase()=="grasas"){palabra1_letra2.value="i";}
        if(palabra1.tolowerCase()=="grasas"){palabra1_letra7.value="e";}

        if(palabra2.tolowerCase()=="higado"){palabra2_letra2.value="u";}
        if(palabra2.tolowerCase()=="grasas"){palabra2_letra7.value="i";}

        if(palabra5.tolowerCase()=="fibra"){palabra5_letra2.value="e";}
        if(palabra5.tolowerCase()=="insulina"){palabra5_letra5.value="i";}
        if(palabra5.tolowerCase()=="insulina"){palabra5_letra7.value="u";}

    }
    }

