
function accesoNodo(){
var array = document.getElementsByTagName('p');

for (let index = 0; index < array.length; index++) {
    alert(array[index].innerText);
    
}
}

function crearElemento(){
    var nodoPadre = document.getElementById("mono");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("probando")

    parrafo.appendChild(texto);
    nodoPadre.appendChild(parrafo);
}