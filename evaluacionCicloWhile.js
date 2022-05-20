//evaluacion
/*
Fecha 17/mayo/2022
realizado por Mariana Jaramillo-Sofia Martinez
*/
console.log("punto 1");
 var numero=prompt("ingrese el numero hasta donde quiere conocer los multiplos de 5");//para imprimir un mensaje al usuario
 var contador=0;//de que numero se empieza a contar
 while(contador <= numero){//estamos dando la condicion es decir que el contador debe ser menor o igual al numero que ingrese el usuario
     if(contador%5==0){//la operacion
         console.log("El " ,contador," si es multiplo de 5");//que si se cumple lo de arriba el numero si es multiplo de 5
    }else{
        console.log("El " ,contador," no es multplo de 5");//significa que no es multiplo de 5
    }
    contador++;
}             

console.log("punto 2");
var acumulador=0;
var ciclo1=0
var cantArti = prompt("ingrese la cantidad de articulos que va a registrar");

while(ciclo1<cantArti){
var precio=parseInt(prompt("ingrese el precio del articulo"));
acumulador+=precio
ciclo1+=1
}
console.log("el precio de los articulos es" + acumulador) 

console.log("punto 3");
var acumulador=0;
var ciclo1=1
var cantArti = prompt("ingrese la cantidad de articulos que va a registrar");
var precio=parseInt(prompt("ingrese el precio del articulo"))
acumulador+=precio
ciclo1+=1
var registro=prompt("desea dejar de registrar diga si")

while(registro!="si"){
    var precio=parseInt(prompt("ingrese el precio del articulo"));
acumulador+=precio
    registro=prompt("ingrese si para parar");

}
console.log("el precio de los articulos es" + acumulador) 

console.log("punto 4");
var acumulador=0;
var ciclo1=0
var cantArti = prompt("ingrese la cantidad de articulos que va a registrar");
var precio=parseInt(prompt("ingrese el precio del articulo"))
acumulador+=precio
var registro=prompt("desea dejar de registrar diga si")

while(registro!="si"){
    var precio=parseInt(prompt("ingrese el precio del articulo"));
acumulador+=precio
    registro=prompt("ingrese si para parar");
    ciclo1+=1

}

if (cantArti>=8){acumulador=acumulador*0.9;
console.log("con el descuento el precio total es de" + acumulador);
}else if(cantArti>=15){acumulador=acumulador*0.85
console.log("con el descuento el precio total es de" + acumulador);
}else if(cantArti>=25){acumulador=acumulador*0.8
    }
console.log("con el descuento el precio total es de" + acumulador);

console.log("punto 5");
var pedido=0;
var cantidad=parseInt(prompt("ingrese la cantidad de notas que hay en el salon")); ;
var notaCo
var ciclo2=1;
var aprobo=0
while(ciclo2<=cantidad){
    var notaCo=parseInt(prompt("ingrese la nota final del alumno" + ciclo2)); ;
    ciclo2 += 1
    if(notaCo>=3.5){
        console.log("el alumno aprobo la materia");
        aprobo+=1
        }else{
            console.log("el alumno aprobo la materia");
            console.log("el alumno perdio la materia");
            perdio+=1
        }
        }
        if(gano<=perdio){
            console.log("dede abrirse el curso de verano");
        }else{
            console.log("la cantidad de estuduantes no es suficiente para el curso de verano");
        }            







