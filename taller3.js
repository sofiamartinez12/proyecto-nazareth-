//archivo de practica y pruebas de JavaScript
/* 
Taller 3
Fecha 23/03/2022
Realizado por: marianajaramillo y sofia martinez
*/
//solucion punto 1
var litrosA
var tiempoA
litrosA = prompt("ingrese la cantidad de litros para llenar la piscina");
tiempoA = litrosA * 1/145
console.log("la piscina se tarda en llenar" + tiempoA + "horas");
//solucion punto 2
var metrosL
var milimetros
metrosL=prompt("ingrese los metros que desea convertir");
milimetros = metrosL *(1000/1);
console.log(metrosL + "m equivale a" + milimetros + "mm");
//solucion punto 3
var decimetros
decimetros = milimetros *(1/100);
console.log(milimetros + "mm equivale a" + decimetros + "dm");
//solucion punto 4
var kilometros
kilometros = decimetros * (1/1000);
console.log(decimetros + "dm equivale a" + kilometros + "km");
//solucion punto 5
var duracion 
var costo 
duracion = prompt("ingrese el tiempo que se demoro en la llamada");
costo = duracion * 1/120;
console.log("la llamada telefonica tiene un costo de" + costo + "pesos");
//solucion punto 6
var horas
var costo
horas = prompt("ingrese la cantidad de horas que desea ver");
costo = (horas -1) * (25000) + 40000;
console.log("la cantidad de horas que debe pagar es" + costo);

