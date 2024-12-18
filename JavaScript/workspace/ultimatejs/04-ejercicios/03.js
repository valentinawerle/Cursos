/**
 * indice validar que el elemento no sea menor a cero y que 
 * exista en el array
 *
 */

function getbyidX(arr, idx){
    if(idx > 0 || arr.length <= idx){
        return 'Elemento no existe';
    }

    return arr[idx];
}

let resultado = getbyidX([1, 2], 1);
console.log(resultado);