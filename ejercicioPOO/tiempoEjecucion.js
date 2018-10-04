//1 millon de veces

var array = new Array();
var seta = new Set();


//ARRAY.PUSH
var start = new Date().getTime();
for (var i = 0; i < 1000000; ++i) {
    array.push(1); 
}
var end = new Date().getTime();
var time = end - start;
var segundos = time / 1000;
document.write("Tiempo de ejecución array.push: " + segundos + " segundos");


//----------
document.write("<br\>");
document.write("<br\>");

//SET.ADD
var start = new Date().getTime();
for (var i = 0; i < 1000000; ++i) {
seta.add(1);   
}
var end = new Date().getTime();
var time = end - start;
var segundos = time / 1000;
document.write("Tiempo de ejecución set.add: " + segundos + " segundos");

//----------

document.write("<br\>");
document.write("<br\>");


//ARRAY.SPLICE
var start = new Date().getTime();

array.splice(1,1);

var end = new Date().getTime();
var time = end - start;
var segundos = time / 1000;
document.write("Tiempo de ejecución array.splice: " + segundos + " segundos");


//----------

document.write("<br\>");
document.write("<br\>");

//SET.DELETE
var start = new Date().getTime();

seta.delete(1);   

var end = new Date().getTime();
var time = end - start;
var segundos = time / 1000;
document.write("Tiempo de ejecución set.delete: " + segundos + " segundos");

//----------

document.write("<br\>");
document.write("<br\>");


//ARRAY.INDEXOF
var start = new Date().getTime();
for (var i = 0; i < 1000000; ++i) {
    array.indexOf(1); 
}
var end = new Date().getTime();
var time = end - start;
var segundos = time / 1000;
document.write("Tiempo de ejecución array.indexOf: " + segundos + " segundos");

//----------

document.write("<br\>");
document.write("<br\>");

//SET.HAS
var start = new Date().getTime();
for (var i = 0; i < 1000000; ++i) {
seta.delete(1);   
}
var end = new Date().getTime();
var time = end - start;
var segundos = time / 1000;
document.write("Tiempo de ejecución set.has: " + segundos + " segundos");

//----------
