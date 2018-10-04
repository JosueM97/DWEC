
var lineas = prompt("Introduce número");
var contador = lineas - 1;
for (let index = 0; index < lineas; index++) {

    for(let j = contador; j < lineas; j++){

        document.write("*");
        
    }
    contador--;
    document.write(" <br/>");
}
