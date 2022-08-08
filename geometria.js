//archivo de practica y pruebas de JavaScript
/* 
Taller 1 tercer periodo
Fecha 8/08/2022
Realizado por: marianajaramillo y sofia martinez
*/


function suma(num1, num2){
    var resultado = num1 + num2;
    return resultado;
}    

function resta(num1, num2){
    var resultado = num1 - num2;
    return resultado;
}    

function multiplicacion(num1, num2){
    var resultado = num1 * num2;
    return resultado;
}    

function division(num1, num2){
    var resultado = num1 / num2;
    return resultado;
}    

function potencia(num1, num2){
    var resultado = num1 ** num2;
    return resultado;
}    

function main_geometria(){
    var eleccion = prompt("Por favor ingrese la operacion que desea realizar: \n 1.Hallar el area de una figura \n 2.Hallar el perimetro de una figura ");
    var eleccion2 = prompt("Por favor ingrese la figura que desea hallar: \n 1.Rectangulo \n 2.Circulo");

    var num1 = parseFloat=(prompt("Por favor ingrese el primer valor"));
    var num2 = parseFloat=(prompt("Por favor ingrese el segundo valor"));

    if(eleccion == 1){
        if(eleccion2 == 1){
            console.log( multiplicacion(num1, num2))
        }else if(eleccion2 == 2){
           var resultado= potencia(num1,2)
            console.log(multiplicacion(resultado, 3.14))
        }
    }else if(eleccion == 2){
        if(eleccion2 == 1){
            var dobleBase = multiplicacion(num1,2);
            var dobleAltura = multiplicacion(num2,2);
            console.log("El perimetro del rectangulo es " + suma(dobleBase, dobleAltura));
        }else if(eleccion2 == 2){
            var resultado= multiplicacion(num1,2)
            console.log(multiplicacion(resultado, 3.14))
        }    
    }        

    





}


