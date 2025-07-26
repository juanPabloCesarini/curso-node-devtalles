const users = [
    {
        id:1,
        name:"juan pablo",
    },
    {
        id:2,
        name:"maxi",
    },
];

function getUsesById(id, callback){
   const user = users.find(function(user){
        return user.id === id;
    });

    if (!user){
        return callback("no encontrado");
    }
    return callback(null,user);

    
}
module.exports = {getUsesById}