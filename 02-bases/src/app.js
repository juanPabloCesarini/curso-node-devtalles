//const {emailTemplate}= require('./js-foundation/01-template.js');
//require('./js-foundation/02-destructuring.js');
const {getUsesById} = require('./js-foundation/03-callbacks.js');

const id=2;
getUsesById(id, (error, user)=>{
 if(error){
        throw new Error(`${error} ${id}`);
    }
    console.log(user);
})

   
    