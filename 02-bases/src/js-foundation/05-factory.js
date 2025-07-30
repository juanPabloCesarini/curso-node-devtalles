//const {v4:uuidv4}=require('uuid');
//const { getAge, idConstructor } = require('../plugins');

const buildMakePerson = ({idConstructor,getAge}) => {
  return ({ name, birthdate }) => {
    return {
      id: idConstructor(), //uuidv4(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

/* const juan = buidPerson(objPerson);

console.log(juan); */

module.exports = {
  buildMakePerson,
};
