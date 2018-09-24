
//atributos
var tamanyoArray;
var numeros = new Array();
var numeroMayor = 0;
//pedir tamaño array
tamanyoArray = prompt("Introduce la cantidad de números");


for (let index = 0; index < tamanyoArray; index++) {
    //pedir un nuevo numero
    let nuevoNumero = prompt("Introduce un número")
    
    //añadir numero al final del array
    numeros.push(nuevoNumero);
}

for(var i in numeros){
    
    if(numeros[i] > numeroMayor){
        numeroMayor = numeros[i];
    }
}

document.write(numeroMayor);

