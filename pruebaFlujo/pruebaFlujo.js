document.getElementById("divaso").addEventListener("click",
function( event ) {
    console.log("x: " + event.screenX);
    console.log("y: " + event.screenY);

},false);

document.getElementById("boton1").addEventListener("click",function (event){
    alert("Has pulsado el boton " + this.id);
},false);

document.getElementById("boton2").addEventListener("click",function (event) {
    var x = new Event("click");
    document.getElementById("boton1").dispatchEvent(x);
},false);