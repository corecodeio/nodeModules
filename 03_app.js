const fs = require('fs');
const path = require('path');

const exampleFilePath = path.join('.', path.sep, 'files', 'example.txt');

const exampleFile = fs.readFileSync(exampleFilePath, 'utf-8');

console.log(exampleFile);


console.log('File will be edited');

fs.writeFileSync(exampleFilePath, ' Yosef como estas?', { flag: 'a'});

console.log('File has been edited');