document.addEventListener("DOMContentLoaded",cargar,false);


function cargar(){
    document.getElementById("suma").addEventListener("click",nuevaFila);
}


function nuevaFila(){

    var nodoPadre = document.getElementById("divGeneral");

    //FILA
    var fila = document.createElement("div");
    fila.classList.add("fila");

    //DNI
    var dni= document.createElement("div");
    var textoDni = document.createTextNode("DNI");
    var inputDni = document.createElement("input");

    dni.classList.add("dni");

    //NOMBRE
    var nombre = document.createElement("div");
    var textoNombre = document.createTextNode("Nombre");
    var inputNombre = document.createElement("input");

    nombre.classList.add("nombre");
    //APELLIDOS

    var apellidos = document.createElement("div");
    var textoApellidos = document.createTextNode("Apellidos");
    var inputApellidos = document.createElement("input");
    
    apellidos.classList.add("apellidos");


    //BORRAR

    var borrar = document.createElement("img");
    borrar.setAttribute("src","equis.png");
    borrar.classList.add("equis");

    //EDITAR

    var editar = document.createElement("img");
    editar.setAttribute("src","lapiz.svg");
    editar.classList.add("lapiz");
//-----------------------------------------------------------
    //FILA
    nodoPadre.appendChild(fila);

    //DNI 
    dni.appendChild(textoDni);
    dni.appendChild(inputDni);
    fila.appendChild(dni);
    
    //NOMBRE
    nombre.appendChild(textoNombre);
    nombre.appendChild(inputNombre);
    fila.appendChild(nombre);

    //APELLIDOS
    apellidos.appendChild(textoApellidos);
    apellidos.appendChild(inputApellidos);
    fila.appendChild(apellidos);


    //BORRAR
    fila.appendChild(borrar);

    //EDITAR
    fila.appendChild(editar);
    

}