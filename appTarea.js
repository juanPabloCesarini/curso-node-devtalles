// EJERCICIO PARA CONTAR PALABRAS
const fs = require(`fs`);

const content = fs.readFileSync('readme2.md', 'utf8');

const wordCount = content.split('React').length;

console.log('Palabras: ',wordCount);

// LO CORRECTO PARA QUE TOME EL CASE INSENTIVE
// USAR EXPRESION REGULAR

const reactWordCount = content.match(/react/gi).length;

console.log("Resultado correcto: " , reactWordCount);

