
var celdas = ["", "", "", "", "", "", "", "", ""];


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
        celdas[numeroCelda-1] = "X";

        console.log(numeroCelda + celdas[numeroCelda-1]);


        //Creacion
        var nodoPadre = this;
        var h1 = document.createElement("h1");
        var equis = document.createTextNode("X");
        h1.classList.add("letras");

        h1.appendChild(equis);;
        nodoPadre.appendChild(h1);
        console.log(celdas);

        comprobarVictoriaJugador();
    }

    function comprobarVictoriaJugador() {
        var seguir = true;
        //HORIZONTAL
        if((celdas[0] == "X" && celdas[1] == "X" && celdas[2] == "X") || (celdas[3] == "X" && celdas[4] == "X" && celdas[5] == "X") || (celdas[6] == "X" && celdas[7] == "X" && celdas[8] == "X")){
            alert("Has ganado");
            seguir = false;
        }

        //VERTICAL
        if((celdas[0] == "X" && celdas[3] == "X" && celdas[6] == "X") || (celdas[1] == "X" && celdas[4] == "X" && celdas[7] == "X") || (celdas[2] == "X" && celdas[5] == "X" && celdas[8] == "X")){
            alert("Has ganado");
            seguir = false;
        }

        //DIAGONAL
        if((celdas[0] == "X" && celdas[4] == "X" && celdas[8] == "X") || (celdas[2] == "X" && celdas[4] == "X" && celdas[6] == "X")){
            alert("Has ganado");
            seguir = false;
        }
        //Para seguir si no se ha ganado aun
        if(seguir){
            ponerO();
        }
    }

}

function ponerO() {

    var numeroRandom = Math.floor(Math.random() * (celdas.length -1 ) + 1);
    console.log(numeroRandom);
    console.log(celdas[numeroRandom]);
    if (document.getElementById("celda" + numeroRandom).innerHTML == "") {
        document.getElementById("celda" + numeroRandom).innerHTML = "O";
        celdas[numeroRandom-1] = "O";

    } else {
        console.log("para");
        ponerO();
    }

    console.log(celdas);
    comprobarVictoriaIA();
}

function comprobarVictoriaIA() {
    var seguir = true;
    //HORIZONTAL
    if((celdas[0] == "O" && celdas[1] == "O" && celdas[2] == "O") || (celdas[3] == "O" && celdas[4] == "O" && celdas[5] == "O") || (celdas[6] == "O" && celdas[7] == "O" && celdas[8] == "O")){
        alert("Has perdido");
    }

    //VERTICAL
    if((celdas[0] == "O" && celdas[3] == "O" && celdas[6] == "O") || (celdas[1] == "O" && celdas[4] == "O" && celdas[7] == "O") || (celdas[2] == "O" && celdas[5] == "O" && celdas[8] == "O")){
        alert("Has perdido");
    }

    //DIAGONAL
    if((celdas[0] == "O" && celdas[4] == "O" && celdas[8] == "O") || (celdas[2] == "O" && celdas[4] == "O" && celdas[6] == "O")){
        alert("Has perdido");
    }
}