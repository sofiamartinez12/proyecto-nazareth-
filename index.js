console.log("Hola Mundo");
// comentarios en linea 
/*comentarios 
de
varias
lineas
*/ 


var primerVariable;
let edadUsuario;
//declarar variables
var nombreVariable;
//crear variable sin asignar valor
/*
inicializar variables:
asignar un valor al momento de crear la variable
*/
var gradoEstudiante="10A";
/*
asignar un valor: 
 igualar una variable existente a un nuevo valor 
 */
edadUsuario=16;
//asignar valor desde otra variable
console.log(edadUsuario);
var edad=17;
edadUsuario=edad;
console.log(edadUsuario);
/*asignar valor desde el teclado: 
existen dos maneras de hacerlo, la primera es por ventana emergente y la segunda es por medio de un formulario de html 
*/
var valor= prompt("");
console.log("la variable vale "+valor);
/*
consonantes:son valores que no pueden ser cambiados durante la ejecucion del codigo. Las constantes siempre deben ser inicializadas 
*/
const PI= 3.1416;
//imprimir por consola
//simple
console.log("...");
console.log(valor);
//concatenado
console.log("..."+valor);
prompt("ingrese un valor:");
//operadores
//suma
var suma;
suma=5+4;
console.log(suma);
var a=12;
suma=a+8;
console.log(suma);
var b=20;
suma=a+b;
console.log(suma);
//resta
var resultado;
resultado=a-b;
console.log(resultado);
resultado=b-a;
console.log(resultado);
//multiplicacion
var producto;
producto=a*b;
console.log(producto);
//division
var division;
division=a/b; 
console.log(division);
division=b/a;
console.log(division);
//orden de operaciones
var result;
result=a*b;
console.log(result);
result=a*b-10;
console.log(result);
result=a*(b-10);
console.log(result);
//exponente/potencia
var exp=3**2;
console.log(exp);
exp=3**3;
console.log(exp);
//cadenas
var cadenita1="3";
var cadenita2="5";
var SumaCadenas=cadenita1+cadenita2;
console.log(SumaCadenas);
var nombrecito="Sofia";
var apellidito="Martinez";
var nomCompleto=nombrecito +" "+ apellidito;
console.log(nomCompleto);
var Longitud=nombrecito.length;
console.log(Longitud);
console.log(nomCompleto.length);
//Encontrar caracteres dada la posicion en el vector.
var primeraLetra;
primeraLetra=nombrecito[0]; 
console.log(primeraLetra);
console.log(nombrecito[1]);
//Encontrar la ultima posicion de una cadena o vector.
nombrecito[nombrecito.length-1];
console.log(nombrecito[nombrecito.length-1]);
//se debe buscar la longitud de la cadena restarle 1 para encontrar la ultma letra 
// las posiciones de una cadena se pueden consultar pero no reasignar
nombrecito[0]="P";
console.log(nombrecito);
nombrecito="Mariana";
console.log(nombrecito);
//parseo o casting
/*se trata de convertir las variables a otro tipo de dato, los cambios existentes:
*a entero parseInt()
*a decimal parseFloat()
*a cadena String()
*/
//convertir variable
var entero1=prompt("ingrese un entero");
var entero2=prompt("ingrese otro entero");
var sumaE= entero1 + entero2;
console.log("sin parseInt"+sumaE);
//forma 1
/*convertir el dato justo en el momento en el que se recibe por teclado
esto implica que cuando se llame la variable ya este convertida al tipo de dato deseado
*/  
entero1=parseInt(prompt("ingrese un entero"));
entero2=parseInt(prompt("ingrese otro entero"));
sumaE= entero1 + entero2;
console.log("convertido" + sumaE);
var P;
var Alt;
var base;
Alt = parseInt(prompt("ingrese la altura"));
base = parseInt(prompt("ingrese la base"));
P= Alt+base+Alt+base;
console.log("el perimetro es"+ P);