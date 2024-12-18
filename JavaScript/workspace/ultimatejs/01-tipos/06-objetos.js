

//personaje de tv
let nombre= "Starlight"
let serie= "The boys"
let edad= 26;

let personaje={
    nombre: "Starlight",
    serie: "The boys",
    edad: 26,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["serie"]);

//para modificar
personaje.edad = 24;

let llave = "edad";
personaje[llave] = 16;

//borrar propiedad

delete personaje.serie;

console.log(personaje);
