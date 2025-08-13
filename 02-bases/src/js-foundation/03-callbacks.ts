interface User {
  id: number;
  name: string;
}
const users: User[] = [
  {
    id: 1,
    name: "juan pablo",
  },
  {
    id: 2,
    name: "maxi",
  },
];

export const getUsesById = (id: number, callback: (err?: string, user?: User) => void) => {
  const user = users.find((user) => {
    return user.id === id;
  });

  user ? callback(undefined, user) : callback(`user not found with id:${id}`);
}
