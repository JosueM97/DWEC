function mostrarTexto(){
   
        var nodoPadre = document.getElementById("dos");
        var parrafo = document.createElement("p");
        var texto = document.createTextNode("Este es un texto")
    
        parrafo.appendChild(texto);
        nodoPadre.appendChild(parrafo);
}

function mostrarTextArea(){

    var nodoPadre = document.getElementById("cuatro");
        var area = document.createElement("textarea");
        var texto = document.createTextNode("Este es un textarea")
    
        area.appendChild(texto);
        nodoPadre.appendChild(area);

}

function mostrarDiv(){

        var nodoPadre = document.getElementById("tres");
            var div = document.createElement("div");
            var texto = document.createTextNode("Este es un div")
        
            div.appendChild(texto);
            nodoPadre.appendChild(div);
    
    }

function mostrarBoton(){

        var nodoPadre = document.getElementById("uno");
            var boton = document.createElement("button");
            var texto = document.createTextNode("Esto es un boton")
        
            boton.appendChild(texto);
            nodoPadre.appendChild(boton);
    
    }