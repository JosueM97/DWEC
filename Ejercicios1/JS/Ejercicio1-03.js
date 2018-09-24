
    //EXPRESIONES REGULARES
    var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    var expresion_regular_correo = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var expresion_regular_telefono = /^(6|7)[ -]*([0-9][ -]*){8}$/;
    var expresion_regular_ip = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    var expresion_regular_url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    
    //boolean
    var todoVaBien = false;
    
    //DNI
    
    while(!todoVaBien){
        var dni = prompt("Introduce un DNI válido");
        let numero;
        let letra;
        let letras;
      
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letra = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letras="TRWAGMYFPDXBNJZSQVHLCKET";
       letras=letras.substring(numero,numero+1);
      if (letras!=letra.toUpperCase()) {
         alert("DNI no válido, la letra no corresponde con el número");
       }else{
         alert("DNI correcto");
         todoVaBien = true;
       }
    }else{
       alert('DNI erroneo, formato no válido');
      
     }

    }
    todoVaBien = false;

     //CORREO
     while(!todoVaBien){
     var correo = prompt("Introduce correo");
      
      if(expresion_regular_correo.test(correo)){
            todoVaBien = true;
      }
      else{
        alert("El correo no es válido");
      }
    }
    todoVaBien = false;
      //TELEFONO 
      while(!todoVaBien){
      var telefono = prompt("Introduce teléfono")
          if(expresion_regular_telefono.test(telefono)){
            todoVaBien = true;
          }
          else{
              alert("El teléfono no es válido")
          }
        }
    todoVaBien = false;
    //IP
    while(!todoVaBien){
    var ip = prompt("Introduce una IP")
          if(expresion_regular_ip.test(ip)){
            todoVaBien = true;
          }
          else{
              ("La direccion ip no es válida")
          }
        }
        todoVaBien = false;
    //URL
    while(!todoVaBien){
    var url = prompt("Introduce URL")
          if(expresion_regular_url.test(url)){
              todoVaBien = true;
          }
          else{
              alert("Es una dirección no válida");
          }
        }

      if(todoVaBien){
        alert("Todo es correcto, ha finalizado el formulario");
      }