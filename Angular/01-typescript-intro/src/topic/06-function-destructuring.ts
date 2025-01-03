// Definimos una interfaz `Product` para estructurar los datos de un producto.
export interface Product {
    description: string; // Descripción del producto
    price: number;       // Precio del producto
}

// Creamos un objeto `phone` que implementa la interfaz `Product`.
const phone: Product = {
    description: 'Samsung Galaxy S21', // Descripción del producto
    price: 1000.00                      // Precio del producto
}

// Creamos otro objeto `tablet` que también implementa la interfaz `Product`.
const tablet: Product = {
    description: 'iPad Pro', // Descripción del producto
    price: 1200.00           // Precio del producto
}

// Definimos una interfaz `TaxCalculationOptions` para estructurar las opciones necesarias para el cálculo de impuestos.
interface TaxCalculationOptions {
    tax: number;        // Tasa de impuestos (porcentaje como decimal, e.g., 0.15 para 15%)
    products: Product[]; // Lista de productos para calcular el total y los impuestos
}

// Definimos la función `taxCalculation` que calcula el total y los impuestos de una lista de productos.
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    let total = 0; // Inicializamos el total en 0

    const {tax, products} = options; 

    // Recorremos el array de productos y sumamos sus precios al total.
    products.forEach(({ price }) => {
        total += price;
    });

    // Retornamos un array con el total y el total incluyendo los impuestos.
    return [total, total * tax];
}

// Creamos un carrito de compras con los productos definidos previamente.
const shoppingCart = [phone, tablet];

// Definimos la tasa de impuestos como 15% (0.15).
const tax = 0.15;

// Llamamos a la función `taxCalculation` pasando la tasa de impuestos y el carrito de compras.
const [total, totalTax] = taxCalculation({
    tax: tax,
    products: shoppingCart
});

// Mostramos el total y el total con impuestos en la consola.
console.log('Total: ', total);           // Imprime el total de los precios
console.log('Total with tax: ', totalTax);  // Imprime el total con impuestos

