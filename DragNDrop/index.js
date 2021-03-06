
function cargar() {
    document.getElementById("jugadores").addEventListener("dragover", allowDrop);
    document.getElementById("equipo1").addEventListener("dragover", allowDrop);
    document.getElementById("equipo2").addEventListener("dragover", allowDrop);
    document.getElementById("jugadores").addEventListener("drop", drop);
    document.getElementById("equipo1").addEventListener("drop", drop);
    document.getElementById("equipo2").addEventListener("drop", drop);


    var vector = document.getElementsByClassName("drags");

    for (let index = 0; index < vector.length; index++) {
        vector[index].addEventListener("dragstart", drag);

    }

}

function allowDrop(ev) {

    //Permitir que reciba algún elemento
    ev.preventDefault();

}

function drag(ev) {

    //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {

    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();

    //Guardamos el elemento, llamado "text" en una variable.
    var data = ev.dataTransfer.getData("text");

    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
    ev.target.appendChild(document.getElementById(data));

}
window.addEventListener("load", cargar);