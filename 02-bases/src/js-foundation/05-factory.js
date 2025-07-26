const {v4:uuidv4}=require('uuid');
const getAge = require('get-age');

const objPerson = { name: "juan", birthdate: "1974-07-07" };

const buidPerson = ({ name, birthdate }) => {
  return {
    id: uuidv4(),
    name: name,
    birthdate:birthdate,
    age: getAge(birthdate),
  };
};

const juan = buidPerson(objPerson);

console.log(juan);