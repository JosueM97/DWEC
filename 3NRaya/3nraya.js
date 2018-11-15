
var celdas = ["", "", "", "", "", "", "", "", "","",""];


document.addEventListener("DOMContentLoaded", cargar, false);
function cargar() {

    document.getElementById("celda1").addEventListener("click", ponerX);
    document.getElementById("celda2").addEventListener("click", ponerX);
    document.getElementById("celda3").addEventListener("click", ponerX);
    document.getElementById("celda4").addEventListener("click", ponerX);
    document.getElementById("celda5").addEventListener("click", ponerX);
    document.getElementById("celda6").addEventListener("click", ponerX);
    document.getElementById("celda7").addEventListener("click", ponerX);
    document.getElementById("celda8").addEventListener("click", ponerX);
    document.getElementById("celda9").addEventListener("click", ponerX);

}

function ponerX() {

    if (this.innerHTML == "") {

        //coge el id
        var auxiliarCelda = this.id;

        //coge solo la parte del numero del id
        var numeroCelda = auxiliarCelda[5];

        //le asigna x
        celdas[numeroCelda - 1] = "X";

        console.log(numeroCelda + celdas[numeroCelda - 1]);


        //Creacion
        var nodoPadre = this;
        var h1 = document.createElement("h1");
        var equis = document.createTextNode("X");
        h1.classList.add("letras");

        h1.appendChild(equis);;
        nodoPadre.appendChild(h1);
        console.log(celdas);
        ponerO();
    }



}

function ponerO() {

    var numeroRandom = Math.floor(Math.random() * (celdas.length) + 1);
    console.log(numeroRandom);
    console.log(celdas[numeroRandom]);
    if (celdas[numeroRandom] != "X" || celdas[numeroRandom] != "O") {
        document.getElementById("celda" + numeroRandom).innerHTML = "O";
        celdas[numeroRandom - 1] = "O";

    } else {
        console.log("para");
        ponerO();
    }

    console.log(celdas);
}