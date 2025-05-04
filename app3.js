
const fs = require(`fs`);

const content = fs.readFileSync('readme2.md', 'utf8');

const wordCount = content.split(' ').length;

console.log('Palabras: ',wordCount);