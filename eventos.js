
//EXPRESIONES REGULARES
var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
var expresion_regular_correo = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
var expresion_regular_telefono = /^(6|7)[ -]*([0-9][ -]*){8}$/;
var expresion_regular_ip = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
var expresion_regular_url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var expresion_regular_nombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
//DNI
function validarDni(x){
        let numero;
        let letra;
        let letras;
        var dni = x.value;
      
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letra = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letras="TRWAGMYFPDXBNJZSQVHLCKET";
       letras=letras.substring(numero,numero+1);
      if (letras!=letra.toUpperCase()) {
         //alert("DNI no válido, la letra no corresponde con el número");
         document.getElementById('dni').style.color='red';
       }else{
        //correcto
        document.getElementById('dni').style.color='green';
       }
    }else{
       //alert('DNI erroneo, formato no válido');
       document.getElementById('dni').style.color='red';
      
    }

}

//CORREO
    function validarCorreo(x){
        var correo = x.value;
     
     if(expresion_regular_correo.test(correo)){
         //correcto
         document.getElementById('correo').style.color='green';
     }
     else{
       //alert("El correo no es válido");
       document.getElementById('correo').style.color='red';
     }
    }

//IP
function validarIp(x){
    ip = x.value;
    if(expresion_regular_ip.test(ip)){
        //correcto
        document.getElementById('ip').style.color='green';
    }
    else{
        //alert("La direccion ip no es válida")
        document.getElementById('ip').style.color='red';
    }
}

//NOMBRE
function validarNombre(x){
    nombre = x.value;
    if(expresion_regular_nombre.test(nombre)){
        //correcto
        document.getElementById('nombre').style.color='green';
    }else{
        //negativo
        document.getElementById('nombre').style.color='red';
    }
}