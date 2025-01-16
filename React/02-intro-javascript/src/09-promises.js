import { getHereoById } from './08-imp-exp';

const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {

        const p1 = getHereoById(2);
        resolve(p1);
        //reject('No se encontro el heroe');
    },2000 )

});

promesa.then((heroe) => {
    console.log('heroe', heroe)
})

.catch(err => console.warn(err));



const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
    
            const p1 = getHereoById(2);
            if ( p1 ){
                resolve( p1 );
            } else {
                reject('No se encontro al heroe');
            }
        },2000 )
    
    });

}

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn );