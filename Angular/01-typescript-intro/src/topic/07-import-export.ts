import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [

    {
        description: 'Samsung Galaxy S21',
        price: 1000.00
    },
    {
        description: 'iPad Pro',
        price: 1200.00
    }
]

const [total, taxTotal] = taxCalculation ({
    tax: 0.15,
    products: shoppingCart
})

console.log('Total: ', total);
console.log('Total with tax: ', taxTotal);