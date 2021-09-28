// Native module: path
const path = require('path');

// sparator
console.log(path.sep);

// join
const filePath = path.join(path.sep, 'files', 'example.txt');
console.log(filePath);

// basename 
console.log(path.basename(filePath));

// path relativo: ./file/example.txt
// path absoluto: C:/users/yosef/enode0/file/example.txt

// resolve
const absolutePath = path.resolve(__dirname, 'file', 'example.txt');
console.log(absolutePath);

