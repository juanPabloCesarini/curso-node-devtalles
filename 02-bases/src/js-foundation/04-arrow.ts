interface User {
    id:number;
    name:string;
}    
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

export const getUsersById = (id:number, callback:(err?:string,user?:User)=>void) =>{
   const user = users.find((user) => user.id === id);

  ( user )
    ? callback( undefined, user ) 
    : callback(`User not found with id ${id}`); 

    
}

