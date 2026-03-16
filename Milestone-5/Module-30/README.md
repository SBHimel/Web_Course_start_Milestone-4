JavaScript Basics README

1️⃣ What is the difference between var, let, and const?
========== var ========

Ans:
It is used to declare variables. It has function scope, and you can reassign or redeclare it.

Example:

var name = "Himel";
name = "Safwan"; // works
var name = "Rimon"; // also works


============ let ===========

Ans:
It is used to declare variables. It has block scope, you can reassign but cannot redeclare in the same scope.

Example:

let age = 18;
age = 19; // works
// let age = 20; // Error: cannot redeclare


============= const ============

Ans:
It is used to declare constants. You cannot reassign or redeclare it.

Example:

const pi = 3.14;
// pi = 3.15; // Error: cannot reassign

2️⃣ What is the spread operator (...)?

Ans:
It is used to copy, combine, or expand arrays and objects easily.

Example:

// Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; 
console.log(arr2); // [1, 2, 3, 4, 5]

// Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

3️⃣ What is the difference between map(), filter(), and forEach()?

================ map() ==============

Ans:
It creates a new array by changing each element.

Example:

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]


============= filter() ==========

Ans:
It creates a new array with elements that pass a condition.

Example:

const numbers = [1, 2, 3, 4];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]


============== forEach() ============

Ans:
It runs a function on each element but does not return a new array.

Example:

const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
// Output: 2 4 6 (one by one)

4️⃣ What is an arrow function?

Ans:
It is a shorter way to write a function using =>.

Example:

// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(2, 3)); // 5

5️⃣ What are template literals?

Ans:
It is a way to write strings easily using backticks (`) and you can add variables using ${}.

Example:

const name = "Himel";
const age = 18;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
// Output: My name is Himel and I am 18 years old.