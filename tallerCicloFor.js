console.log("punto 1");

var inicio=prompt("ingrese un numero");
var limite=prompt("ingrese un numero ")
if(inicio<limite){
    for(var i=inicio; i<limite; i++){
        console.log(i)
    }
}else{
    for(var i=limite; i<inicio; i++){
        console.log(i)

    }
}

console.log("punto 2");                                                                                                                                                                             
var tablaMulti=prompt("ingrese un numero")
for(var g=0; g<=10; g++){
    console.log(tablaMulti + "x" + g + "=" + tablaMulti*g)
}

console.log("punto 3");
var inicio=prompt("ingrese el numero");
var final=prompt("ingrese el otro numero  para determinar el final");
for(var p=0; p<=final; p++){
  if(p<=final){
      console.log(inicio + "X" + p + "=" + inicio*p);
    }
}        

console.log("punto 4");
var arregloNum=[]
var numeros;
for(var u=0; u<=10; u++){
numeros=prompt("ingrese un numero");
arregloNum.push(numeros);
}
console.log(arregloNum);
var mayor =0;
for(var u=0; u<=arregloNum.length; u++){
    if(mayor < arregloNum[u])
    mayor=arregloNum[u];
    }
    console.log("el numero mayor es" + mayor);
    
console.log("punto 5");
var arregloArti=[];
for(var i=0; i<5; i++){
var articulos=prompt("ingrese los articulos que va a comprar")
arregloArti.push(articulos);
}
var arregloPrecio=[];
for(var i=0; i<arregloArti.length; i++){
    precio=prompt("ingrese el precio de" +arregloArti[i])
    arregloPrecio.push(precio);
}

console.log("punto 6")
var nombreArticulo=prompt("ingrese el nombre de un producto para conocer el precio")
for(var i=0; i<arregloArti.length; i++){
    if(arregloArti[i]==nombreArticulo){
        console.log("el precio de" + nombreArticulo + "es $" + arregloPrecio[i]);
    }
}        
  



    