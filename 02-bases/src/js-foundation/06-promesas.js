const {http} = require('../plugins');
const getPokemonById = async (id ) =>{

    const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
/* 
    const res = await fetch(url);
    const pokemon = await res.json(); */

    const pokemon = await http.get(url);

    return pokemon.name;
    /* return fetch(url)
        .then((res) => res.json())
      //  .then( () => {throw new Error('pokemon no existe')})
        .then((pokemon) => pokemon.name);
     */
}

module.exports = getPokemonById;
 