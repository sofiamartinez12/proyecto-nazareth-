//punto1
var saludar="si";
 
if(saludar=="si"){
    console.log("Hola, soy un condicional simple");
}

//punto2
var x=20;
 
if(x<=20){
    console.log("La condición es verdadera");
}
//punto3
var edad=20;
 
if(edad>=18){	
    console.log("Bienvenido, puede ingresar");
}else{
    console.log("Lo siento, no tiene edad suficiente para entrar aquí");
}
//punto4
var numero1 = 5;
var numero2 = 8;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
  console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1 + 1 < numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
//punto5
var numerito = 200;
 
if(numerito < 50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito>50 && numerito<=80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito>80 && numerito<100) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito==100) {
  console.log("numerito es igual a 100");
}else if (numerito>100) {
    console.log("numerito es estrictamente mayor a 100");
}
//punto 6
numerito = 90;
//punto7
numerito = 70;
//punto8
numerito = 200;
//punto9

 var diaActual="jueves";
 if (diaActual=="jueves"){
console.log("vaya a el poli");
}else{
console.log("no puede ir al poli");
}

//punto10
var valor1=2
var valor2=4
if(valor2==0){
console.log("no se puede dividir");
}else{
console.log(valor1/valor2);
}
//punto11
var dia="lunes";
if(dia=="lunes"){
console.log("hoy es arroz con pollo");
}else if(dia=="martes"){
console.log("hoy es chuleta de pollo/cerdo");
}else if(dia=="miercoles"){
console.log("hoy es frijoles");     
}else if(dia=="jueves"){
console.log("hoy es sancocho de pescado");
}else if(dia=="viernes"){
console.log("hoy es bandeja paisa");
}else if(dia=="sabado"){
console.log("hoy es ajiaco");
}else if(dia=="domingo"){
console.log("hoy es sancocho de gallina");
}  

//punto12
var caracter="a";
if(caracter=="a" || caracter=="e" || caracter=="i" || caracter=="o" || caracter=="u"){
console.log("es una vocal");
}else if(caracter=="0" || caracter=="1" || caracter=="2" || caracter=="3" || caracter=="4" || caracter=="5" || caracter=="6" || caracter=="7" || caracter=="8" || caracter=="9"){
console.log("son numeros");
}  
