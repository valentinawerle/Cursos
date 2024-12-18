/**
 * Crear un algoritmo que devuelva el numero menor 
 * y el mayor de un array
 */

let array = [2, 7, 5, 15, -5, -100, 55];

function getMenorMayor(arr){
    menor= arr[0];
    mayor= arr[0];
    for(numero of arr){

        menor < numero ? menor : numero;
        mayor > numero ? mayor : numero;

    }

    return [menor, mayor];

}

let numeros= getMenorMayor(array)
console.log(numeros);


