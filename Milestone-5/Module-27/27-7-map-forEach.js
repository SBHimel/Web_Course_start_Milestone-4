const products = [
    {name: 'laptop', price: 45000},
    {name: 'phone', price: 15000},
    {name: 'tablet', price: 25000},
];
// const prices = products.map(pd => pd.price);
// console.log(prices) //[ 45000, 15000, 25000 ]

// price gula ke 2 gun kore dile
const prices = products.map(pd => pd.price*2);
console.log(prices);

// multi lin arrow function a return kora lage
const names = products.map((pd, index, productsArray) => {
    const upperCaseName = pd.name.toUpperCase();
    console.log(index, upperCaseName, productsArray);
    return upperCaseName;
})
console.log(names);