
const fs = require(`fs`);

const content = fs.readFileSync('readme2.md', 'utf-8');

const wordCount = content.split(' ');

const reactWord = content.split(/React/ig).length;

const otraOpcion = wordCount.match(/React/ig).toLowerCase().length;
console.log('Palabras: ',wordCount);
console.log('React: ', reactWord );
console.log('Otra opcion: ', otraOpcion);