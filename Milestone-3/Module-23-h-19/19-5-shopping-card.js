

const products = [
    { name: "shampoo", price: 300 },
    { name: "chiruni", price: 100 },
    { name: "shirt", price: 700 },
    { name: "pant", price: 1200 },
]
function getShoppingTotal(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
    }
    return total;
}
const total = getShoppingTotal(products)
console.log("Total ajker hisab", total)



//------------------
const products2 = [
    { name: "chiruni", price: 200, quantity: 2 },
    { name: "shirt", price: 1000, quantity: 2 },
    { name: "pant", price: 700, quantity: 1 },
    { name: "shampoo", price: 1300, quantity: 1 },
]
function cartTotal(products2){
    let total = 0;
    for (const product of products2){
        const thisItemsCost = product.price * product.quantity;
        total = total +thisItemsCost;
    }
    return total;
}
const shoppingConst = cartTotal(products2);
console.log(shoppingConst);