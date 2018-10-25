
function quitarSombra(seleccion){
    
    var div = document.getElementById(seleccion.id).style.boxShadow="none";

}
function ponerSombra(seleccion){
    
    var div = document.getElementById(seleccion.id).style.boxShadow="10px 10px 5px gray";

}


function ponerSombraInterior(seleccion){
    var div = document.getElementById(seleccion.id).style.boxShadow="inset 10px 10px 5px gray";
}

function hacerRedondo(seleccion){
    var div = document.getElementById(seleccion.id).style.borderRadius="300px";
}

function eliminar(seleccion){
    var elemento = document.getElementById(seleccion.id);
    var empleado = nodoEliminar.parentNode;
    var jefe = empleado.parentNode;
    jefe.removeChild(empleado);
}