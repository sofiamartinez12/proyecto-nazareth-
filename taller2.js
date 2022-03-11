//archivo de practica y pruebas de JavaScript
/* 
Taller 2
Fecha 08/03/2022
Realizado por: marianajaramillo y sofia martinez
*/
//area del cuadrado
console.log("solucion punto 1");
var areaCuadrado
var volumen
var ladoCuadrado
ladoCuadrado = prompt("ingrese la medida del lado para hallar el area del cuadrado");
areaCuadrado = ladoCuadrado * ladoCuadrado ;
console.log("el valor del area es" + areaCuadrado);
volumen = ladoCuadrado ** 3 ;
console.log("el volumen del cubo es" + volumen);

console.log("solucion punto 2");
var baseRectangulo
var ladoRectangulo
var areaRectangulo
var perimetroR
baseRectangulo = prompt("ingrese la base del rectangulo");
ladoRectangulo = prompt("ingrese el lado del rectangulo");
areaRectangulo = baseRectangulo * ladoRectangulo;
console.log("el area del rectangulo es" + areaRectangulo);
perimetroR = baseRectangulo + baseRectangulo + ladoRectangulo + ladoRectangulo;
console.log("el perimetro del rectangulo es" + perimetroR);

console.log("solucion punto 3");
var diametro
var areaCirculo 
var volumenE
diametro = prompt("ingrese el diametro del circulo");
areaCirculo = Math.PI * (diametro/2)**2;
volumenE = 4/3*Math.PI*(diametro/2)**3;
console.log("el area del circulo es" + areaCirculo);
console.log("el volumen de la esfera es" + volumenE);

console.log("solucion punto 4");
var base1
var base2
var h
var areaTrapezoide
base1 = prompt("ingrese el valor de la base1");
base2 = prompt("ingrese el valor de la base2");
h = prompt("ingrese el valor h");
areaTrapezoide = base1 + base2 * h /2;
console.log("el area del trapezoide es" + areaTrapezoide);

console.log("solucion punto 5");
var anchoP
var ladoP
var profundoP
var volumenP
anchoP = prompt("ingrese el valor del ancho");
ladoP = prompt("ingrese el valor del lado");
profundoP = prompt("ingrese el valor de la profundidad");
volumenP = anchoP * ladoP * profundoP;
console.log("la piscina se llena con" + volumenP + "litros de agua");

console.log("solucion punto 6");
var altoM
var anchoM
altoM = prompt("ingrese el alto del muro");
anchoM = prompt("ingrese el ancho del muro");
var valor = anchoM*altoM*22000;
console.log("se debe pagar al pintor",valor);

console.log("solucion punto 7");
//punto a
var longitudCentimetros = prompt("ingrese los centimetros que desea convertir");
var kilometros = longitudCentimetros/100000;
console.log(longitudCentimetros + "cm equivale a " + kilometros + "km");
//punto b
var volumenDecilitros = prompt("ingrese los decilitros que desea convertir");
var litros = volumenDecilitros*(0.1/1.0);
console.log("la equivalencia de los decilitros a litros es" + litros);
//punto c
var masaMicrog = prompt("ingrese los microgramos que desea convertir");
var gramos = masaMicrog*(1.0/1000000);
console.log("la equivalencia de los microgramos a gramos es" + gramos);
//punto d
var distanciaKm =prompt("ingrese los kilometros que desea convertir");
var milimetros = (1000/1)*(1000/1);
console.log("la equivalencia de los kilometros a milimetros es" + milimetros);










