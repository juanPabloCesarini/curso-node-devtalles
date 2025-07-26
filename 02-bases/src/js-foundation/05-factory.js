//const {v4:uuidv4}=require('uuid');
const { getAge, idConstructor } = require('../plugin');


const objPerson = { name: "juan", birthdate: "1974-07-07" };

const buidPerson = ({ name, birthdate }) => {
  return {
    id: idConstructor(),//uuidv4(),
    name: name,
    birthdate:birthdate,
    age: getAge(birthdate),
  };
};

const juan = buidPerson(objPerson);

console.log(juan);