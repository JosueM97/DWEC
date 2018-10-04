export class Libro {

    constructor(titulo,autor,pais,isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.pais = pais;
        this.isbn = isbn;
    }

    //GETTERS Y SETTERS

    //TITULO
    setTitulo(x){
        this.titulo = x;
    }

    getTitulo(){
        return this.titulo
    }


    //AUTOR
    setAutor(x){
        this.autor = x;
    }

    getAutor(){
        return this.autor;
    }


    //PAIS
    setPais(x){
        this.pais = x;
    }

    getPais(){
        return this.pais;
    }


    //ISBN
    setIsbn(x){
        this.isbn = x;
    }

    getIsbn(){
        return this.isbn;
    }



}