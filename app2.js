const fs = require(`fs`); // FileSystem

const data = fs.readFileSync('readme2.md', 'utf-8');

const newData = data.replace(/React/ig, 'Angular');
// ig: case insensitive. Lo que hace la funcion es reemplazar React por Angular


fs.writeFileSync('README-Angular.md',newData);
// función para crear un archivo, primer parametro es el nombre del archivo. el segundo parámeto es el dato que enviamos como contenido

console.log(data);