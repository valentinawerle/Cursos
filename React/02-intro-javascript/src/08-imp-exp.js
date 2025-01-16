import  heroes, { owners } from './src/data/heroes';


export const getHeroeById = (id) => 
    heroes.find((heroe) => heroe.id === id);


console.log(getHeroeById(2));

 export const getHeroesByOwner = (owner) =>
     heroes.filter((heroe) => heroe.owner === owner);

console.log( getHeroesByOwner('DC') );



