//const {emailTemplate}= require('./js-foundation/01-template.js');
//require('./js-foundation/02-destructuring.js');
const {getUsesById} = require('./js-foundation/03-callbacks.js');

const id=3;
getUsesById(id, function(error, user){
    if(error){
        throw new Error(`Usuario no encontrado con el id: ${id}`);
    }
    console.log(user);
})