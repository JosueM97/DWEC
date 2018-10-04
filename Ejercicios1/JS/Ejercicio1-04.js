
var fecha = "21/03/18";

var nofecha = 2;

    var regular = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;

    if(regular.test(fecha) == true){
        alert("si");
    }else{
        alert("no")
    }



