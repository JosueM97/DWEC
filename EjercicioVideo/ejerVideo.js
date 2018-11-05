document.addEventListener("DOMContentLoaded",cargar,false);


function cargar(){
    document.getElementById("mute").addEventListener("click",silenciar);
    document.getElementById("rewind").addEventListener("click",rebobinar);
    document.getElementById("play").addEventListener("click",reproducir);
    document.getElementById("forward").addEventListener("click",adelantar);
    document.getElementById("reload").addEventListener("click",recargar);
    document.getElementById("volumeDown").addEventListener("click",bajarVolumnen);
    document.getElementById("volumenUp").addEventListener("click",subirVolumen);
    
}
function obtenerVideo(element) {
    var empleado = element.parentNode; //etiqueta img 
    var jefe = empleado.parentNode; //etiqueta div controladores
    var video = jefe.getElementsByTagName("video");

    return video[0];
}


function reproducir() {
    var video = obtenerVideo(this);

    if (video.paused) {
        video.play();
        this.src = "pause.png";
    } else {
        video.pause();
        this.src = "play.png";
    }
}