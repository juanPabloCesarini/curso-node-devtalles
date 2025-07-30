//const {emailTemplate}= require('./js-foundation/01-template.js');
//require('./js-foundation/02-destructuring.js');
//const {getUsesById} = require('./js-foundation/03-callbacks.js');

const { idConstructor,getAge } = require('./plugins');
const {buildMakePerson} = require ('./js-foundation/05-factory.js');

   
const makePerson =   buildMakePerson({idConstructor,getAge});

const objPerson = {name: "juan", birthdate: "1974-07-07"};

const juan = makePerson(objPerson);
console.log(juan);