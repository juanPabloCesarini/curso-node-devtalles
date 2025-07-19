

//console.log(process.env);

const {SHELL, WINDIR} = process.env;

//console.table({SHELL, WINDIR});

const superheroes = ["Flash", "Superman", "Batman"];

const  [, , batman] = superheroes;

console.log(batman);