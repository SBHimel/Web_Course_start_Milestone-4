// console.log(add(10, 20));
// function declaration
function add(num1, num2) {
    return num1 + num2;
}

// console.log(add2(30, 40));
// function expression
const add2 = function (num1, num2) {
    return num1 + num2;
}
// console.log(add2(30, 40));

// arrow function
const add3 = (num1, num2) => num1 + num2;
console.log(add3(50, 60));

const multiple = (a, b) => a * b;

const tenTimes = x => x * 10;
const tenTimes2 = (x) => x * 10;
const getPi = () => 3.1416;
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const isEven = num => num % 2 === 0;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const divide = (p, q) => p / q;

// document.getElementById('btn').addEventListener('click', () =>{})
// document.getElementById('btn').addEventListener('click',  (event) => {});

// 🟢 Task 1 – Basic Arrow
const greet = (name) => {
    return `Hello ${name} , you are learning JavaScript!`;
}
console.log(greet("Himel"));

// short version
const greet2 = name => `Hello ${name}, you are learning JavaScript!`;
console.log(greet2("Himel"));

// 🟢 Task 2 – Calculation Arrow
const totalPrice = (price, quantity) => price * quantity;
console.log(totalPrice(500, 3));

// 🟢 Task 3 – Object Return (Level Up)

const createUser = (name, age) => ({
    name: name,
    age: age
});

console.log(createUser('himel', 19));

//short way
const createUser2 = (name, age) => ({ name, age });
console.log(createUser('himel', 19));

//এইবার 🔥 Final Tiny Test – Arrow Master Check 😎
// const createProduct = (name, price, quantity) => ({name, totalPrice = price*quantity});
// console.log(createProduct('mac',100000,3));

const createProduct = (name, price, quantity) => ({
  name: name,
  totalPrice: price * quantity
});
console.log(createProduct("Laptop", 50000, 3));

// 🔥 Extra Short Version (JS Magic)
const createProduct2 = (name, price, quantity) => ({ name, totalPrice: price * quantity });

console.log(createProduct2("Laptop", 50000, 3));