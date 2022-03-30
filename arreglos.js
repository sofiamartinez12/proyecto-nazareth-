//los arreglos son estructuras que almacenan informacion de cualquier tipo de dato, es decir, string, int, double, array, objetos, entre otros. Los arreglos tienen operaciones tales como consultar, modificar, insertar y eliminar. 
//los arreglos se declaran con corchetes []


//creacion de arreglos 
var arreglos=["Juan", 14];
console.log(arreglos);
//arreglo de arreglos
var notasEstudiantes=[["sofia", 4.8],["isa", 4.6]];
console.log(notasEstudiantes);
//consultar contenido del arreglo 
console.log(notasEstudiantes[0]);
console.log(notasEstudiantes[0][0]);
console.log(notasEstudiantes[1][1]);
//modificar elementos
console.log(arreglos[0] + "tiene" + arreglos[1]);
arreglos[1]=15;
console.log(arreglos[0] + "tiene" + arreglos[1] + "años");
console.log(notasEstudiantes[1][1]);
console.log(notasEstudiantes[1][0] + "tiene" + notasEstudiantes[1][1]);
notasEstudiantes[1][1]=5.0;
console.log(notasEstudiantes[1][0] + "obtuvo" + notasEstudiantes[1][1] + "en su nota final");
//agregar elementos al arreglo
console.log("sin agregar" + arreglos);
arreglos.push("10a");
console.log("agregado" + arreglos);
//agregar elementos al arreglo desde el inicio
console.log("sin agregar" + arreglos);
arreglos.unshift("perez");
console.log("agregado" + arreglos);
//eliminar elementos al arreglo
console.log("sin eliminar" + arreglos);
arreglos.pop(); //elimina el ultimo elemento
console.log("eliminado" + arreglos);
arreglos.shift(); //elimina el primer elemento
console.log("elimina.shift" + arreglos);
//ejercio
/*crear el arreglo con los valores
-analisis
-tecnologia
-desarrollo
2.cambiar desarrollo por BBDD
3.convertir el vector en:
-introduccion 
-analisis
-tecnologia 
*/
var arreglos=["analisis", "tecnologia", "desarrollo"];
console.log(arreglos);
arreglos[2]="BBDD";
console.log(arreglos);
console.log("sin agregar" + arreglos);
arreglos.unshift("introduccion");
console.log("agregado" + arreglos);
console.log("sin eliminar" + arreglos);
arreglos.pop();
console.log("eliminado" + arreglos);
