function suma(num1, num2){
    var resultado = num1 + num2;
    var mensaje = "el resultado de sumar " + num1 + " y " + num2 + " es " + resultado;
   //return mensaje;
    return resultado;
}    

function resta(num1, num2){
    var resultado = num1 - num2;
    var mensaje = "el resultado de restar " + num1 + " y " + num2 + " es " + resultado;
    //return mensaje;
    return resultado;
}    

function division(num1, num2){
    var resultado = num1 / num2;
    var mensaje = "el resultado de dividir " + num1 + " y " + num2 + " es " + resultado;
    //return mensaje;
    return resultado;
}    

function multiplicacion(num1, num2){
    var resultado = num1 * num2;
    var mensaje = "el resultado de multiplicar " + num1 + " y " + num2 + " es " + resultado;
   //return mensaje;
   return resultado;
}    

function potencia(num1, num2){
    var resultado = num1 ** num2;
    var mensaje = "el resultado de la potencia " + num1 + " y " + num2 + " es " + resultado;
    //return mensaje;
    return resultado;
}    

function main_calculadora(){
    var eleccion = prompt("Por favor ingrese el numero de la operacion que desea realizar: \n 1.Suma \n 2.Resta \n 3.Division \n 4.Multiplicacion \n 5. Potencia \n 6. Doble de una suma \n 7. Mitad de un producto \n 8. Triple de la resta \n 9.Quinta de la potencia ");


    var numero1 = parseFloat(prompt ("Por favor ingrese el primer valor:"));
    var numero2 = parseFloat(prompt("Por favor ingrese el segundo valor:"));

    if(eleccion == 1){

        console.log(suma(numero1, numero2));
    }else if (eleccion == 2){
        
        console.log(resta(numero1, numero2));
    }else if (eleccion == 3){
        console.log(division(numero1, numero2));
    }else if (eleccion == 4){
        console.log(multiplicacion(numero1, numero2));
    }else if (eleccion == 5){
        console.log(potencia(numero1, numero2));
    }else if (eleccion == 6){
        var resultadoSuma = suma(numero1, numero2);
        console.log("El doble de la suma de " + numero1 + " y " + numero2 + " es " + multiplicacion(resultadoSuma,2)); 
    }else if(eleccion == 7){
        var resultadoProducto = multiplicacion(numero1, numero2)
        console.log("la mitad del producto entre " + numero1 + " y " + numero2 + " es " + division(resultadoProducto,2)); 
    }else if (eleccion == 8){
        var resultadoResta = resta(numero1, numero2)
        console.log("el triple de la resta entre " + numero1 + " y " + numero2 + " es " + multiplicacion(resultadoResta,3));  
    }else if (eleccion == 9){
        var resultado    

    }


}