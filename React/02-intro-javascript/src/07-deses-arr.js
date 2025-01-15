
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [,,p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


//Tarea
const useState = (valor) => {
    return [valor, ()=> {console.log('Hola mundo')}];
}

const [nombre, setNombre] = useState;

console.log( nombre);

setNombre();

