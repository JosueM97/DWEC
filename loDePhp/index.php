<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>
<?php
    if (!isset (%_GET["enviar"])){

    }
?>
    <form action="#" method="GET">
    Nombre:
    <input type="text" name="nombre">
    Sexo:
    <select name="genero"> 
    <option value="hombre">Hombre</option>
    <option value="mujer">Mujer</option>
    <option value="helicopter">Helicóptero de combate Apache</option>
</select>

<input type="submit" name="enviar">
<?php
    else{

    
    echo "Encantado de conocerte, " . $_POST["nombre"];
    echo ""
    }
?>
</form>
</body>
</html>