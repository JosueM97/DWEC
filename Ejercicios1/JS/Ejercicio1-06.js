
var fecha = "19/05/1997";

var nombreMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

var partesFecha = new Array;
partesFecha = fecha.split("/");

var mes = partesFecha[1]; 
alert(nombreMeses[mes - 1]);