document.addEventListener("DOMContentLoaded",cargar,false);

function cargar(){
    console.log("ee");                                                                                                                        ty        
    document.getElementById("enviar").addEventListener("click",mostrar);
    
}

function mostrar(){
    console.log("ee");
     url = document.getElementById("recurso").value;

     var xhttp = new XMLHttpRequest();

     xhttp.open("GET",url,true);

     xhttp.onreadystatechange = function(){
         document.getElementById("contenidos").textContent = this.responseText;
    };
    xhttp.send(null);
}
