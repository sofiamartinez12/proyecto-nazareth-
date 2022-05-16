console.log("punto 1"); 
var ciclo1=0
while(ciclo1<7){
    console.log("ha hecho" + ciclo1);
    ciclo1 += 1
    }

console.log("punto 2");
var ciclo2=0;
while(ciclo2<33){
    console.log("los multiplos de " + ciclo2)
    ciclo2 += 3
}

console.log("punto 3");
var ciclo3=0
while(ciclo3<52){
    console.log("numeros pares" + ciclo3)
    ciclo3 += 2
}

console.log("punto 4");
var ciclo4=1;
var impar=prompt("ingrese un numero hasta donde quiere conocer el impar");
while(ciclo4<=impar) {
console.log("este numero es impar" + ciclo4 );
ciclo4 += 2;
}    

console.log("punto 5");
var ciclo5=prompt("ingrese un numero")
while((ciclo5 %2)==0){
    console.log(ciclo5 + "es un numero par")
    ciclo5=prompt("ingrese un numero");
}    

console.log("punto 6");  
var acumulador = 0;
var cantEst = prompt("ingrese la cantidad de estudiantes");
var ciclo6=1

while (ciclo6<=cantEst){
var edad=parseInt(prompt("ingrese la edad del estudiante"));
acumulador+=edad
ciclo6+=1
}
console.log("el acumulado de las edades de los estudiantes es" + acumulador)

console.log("punto 7");
var rifa = true
var respuesta;
var ciclo7

while(rifa){
    respuesta=prompt("ingrese un numero");
    console.log("su respuesta fue" + respuesta);
    if(respuesta == 2){
        rifa=false;
    }ciclo7+=1

}console.log("felicitaciones gano la rifa");
console.log("le tomo estos intentos" + ciclo7)




