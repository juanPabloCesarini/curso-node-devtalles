const {v4:uuidv4}=require('uuid');

const idConstructor = ()=>{
    return uuidv4();
}

module.exports = {idConstructor,}