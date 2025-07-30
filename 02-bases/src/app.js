const { idConstructor,getAge } = require('./plugins');
const getPokemonById = require('./js-foundation/06-promesas');

/* const name = getPokemonById(1, (pokemon)=>{
    console.log({pokemon});
}); */

getPokemonById(4)
    .then((pokemon)=>console.log({pokemon}))
   // .catch((err)=>console.log("error!!!!!!"))
    .finally( () => console.log('Fin!!'));

//const {emailTemplate}= require('./js-foundation/01-template.js');
//require('./js-foundation/02-destructuring.js');
//const {getUsesById} = require('./js-foundation/03-callbacks.js');


/* REFENCIA A LA FUNCION FACTORY Y SU USO 

const {buildMakePerson} = require ('./js-foundation/05-factory.js');

   
const makePerson =   buildMakePerson({idConstructor,getAge});

const objPerson = {name: "juan", birthdate: "1974-07-07"};

const juan = makePerson(objPerson);
console.log(juan); */
 
