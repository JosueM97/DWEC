document.addEventListener("DOMContentLoaded",cargar,false);


function cargar(){
    
    
    document.getElementById("mute").addEventListener("click",silenciar);
    document.getElementById("rewind").addEventListener("click",rebobinar);
    document.getElementById("play").addEventListener("click",reproducir);
    document.getElementById("forward").addEventListener("click",adelantar);
    document.getElementById("reload").addEventListener("click",recargar);
    document.getElementById("barraVideo").addEventListener("timeupdate",barraVideo,false);
    /*
    document.getElementById("volumeDown").addEventListener("click",bajarVolumnen);
    document.getElementById("volumenUp").addEventListener("click",subirVolumen);
    */
}

/* ESTO EN PRINCIPIO YA NO SIRVE
function obtenerVideo(element) {
    var hijo = element.parentNode; //etiqueta img 
    var padre = hijo.parentNode; //etiqueta div controladores
    var video = padre.getElementsByTagName("video");

    return video[0];
}
*/

function silenciar() {
    var video = document.getElementById("video");
    if(video.mute){
        video.muted = false;
    }else{
        video.muted = true;
    }
    
    
}

function reproducir() {
    var video = document.getElementById("video");

    if (video.paused) {
        video.play();
        //con this se hace referencia al mismo boton, y con src se cambia la ruta de la imagen para poner otra
        this.src = "pause.png";
    } else {
        video.pause();
        this.src = "play.png";
    }
}

function recargar(){
    var video = document.getElementById("video")
    //recargar video
    video.load();

    //Hacer que el boton play vuelva a ser el verde
    var imagen = document.getElementById("play");
    imagen.src = "play.png";
}

function rebobinar(){
    var video = document.getElementById("video");

    var tiempoActual = video.currentTime;
    video.currentTime = tiempoActual - 10;
}

function adelantar(){
    var video = document.getElementById("video");

    var tiempoActual = video.currentTime;
    video.currentTime = tiempoActual + 10;
}

function bajarVolumnen(){
    var video = document.getElementById("video");

    var volumenActual = video.volume;
    video.volume = volumenActual - 0.1;
}

function subirVolumnen(){
    var video = document.getElementById("video");

    var volumenActual = video.volume;
    video.volume = volumenActual + 0.1;
}

function barraVideo() {
    var momentoVideo = this.currentTime;
    var total = this.duration;
    var barra = document.getElementById("barraVideo");

    barra.value = (100 * momentoVideo) / total;
}