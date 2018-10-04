
//FUNCION
function diasMes(mes,anyo){
    return new Date(anyo,mes,0).getDate();

}

//PROGRAMA
var mes = prompt("Introduce el mes");
var anyo = prompt("Introduce el año");

var dias = diasMes(mes,anyo);
alert("El mes " + mes +" tiene " + dias + " días en el año " + anyo);

