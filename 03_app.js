const fs = require('fs');
const path = require('path');

const exampleFilePath = path.join('.', path.sep, 'files', 'example.txt');

//const exampleFile = fs.readFileSync(exampleFilePath, 'utf-8');

//console.log(exampleFile);


fs.writeFileSync(exampleFilePath, ' Yosef como estas?', { flag: 'a'});

// http...