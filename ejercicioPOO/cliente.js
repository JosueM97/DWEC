
export class Cliente {
    constructor(nombre,direccion,dni,telefono,){
        this.nombre = nombre;
        this.direccion = direccion;
        this.dni = dni;
        this.telefono = telefono;
    }

    //GETTERS SETTERS

    //NOMBRE

    setNombre(x){
        this.nombre = x;
    }

    getNombre(){
        return nombre;
    }

    //DIRECCION
    setDireccion(x){
        this.direccion = x;
    }
    getDireccion(){
        return this.direccion;
    }

    //DNI
    setDni(x){
        this.dni = x;
    }
    getDni(){
        return dni;
    }

    //TELEFONO
    setTelefono(x){
        this.telefono = x;
    }
    getTelefono(){
        return this.telefono;
    }
}