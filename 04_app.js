const fs = require('fs');
const path = require('path');

const exampleFilePath = path.join('.', path.sep, 'files', 'example.txt');
const anotherExampleFilePath = path.join('.', path.sep, 'files', 'anotherExample.txt');

// EVENTLOOP

console.log('Iniciando operación de lectura');
fs.readFile(exampleFilePath, 'utf-8', (err, data) => {
  if(err) return console.log(`Ocurrio un error: ${err}`);
  console.log(data);
});
console.log('Se termino la operación de lectura');

console.log('Iniciando operación de escritura');
fs.writeFile(anotherExampleFilePath, 'Hola node! 🍳', (err, result) => {
  if(err) return console.log(`Ocurrio un error: ${err}`);
  console.log('File was edited');
});
console.log('Se termino la operación de esctura');


