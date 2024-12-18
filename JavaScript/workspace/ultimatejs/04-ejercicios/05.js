let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (let numero of arr) {
        menor = numero < menor ? numero : menor; // Actualizar `menor` si `numero` es menor
        mayor = numero > mayor ? numero : mayor; // Actualizar `mayor` si `numero` es mayor
    }

    return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros); // [-100, 55]
