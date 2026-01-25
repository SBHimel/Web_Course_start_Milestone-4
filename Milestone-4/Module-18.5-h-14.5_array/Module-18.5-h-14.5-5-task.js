
//Task 1. Declare an array

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits[3]);
fruits[2] = "Jambura";
console.log(fruits);

//Task 2. Add or remove elements
let destinations = ["Cox's Bazar", "Sajek Valley", "Sundarbans"];
destinations.push("Cha-Bagan");
console.log(destinations);
destinations.push('bandorban','moinamoti')
console.log(destinations);
// remove
destinations.pop();
console.log(destinations);

// Task 3. Checking Array Membership with ‘includes’
let books = ["Harry Potter", "Atomic Habits", "The Alchemist", "Rich Dad Poor Dad", "Clean Code"];
console.log(books.includes('Harry Potter'));

// Task 4. Checking if it's an Array
 let player = ['messi', 'neymar', 'ronaldo', 'mbappe'];
 let hi = 34;
 let me = "Himel";
 let isStudent = true;
 console.log(Array.isArray(player));
 console.log(Array.isArray(hi));
 console.log(Array.isArray(me));
 console.log(Array.isArray(isStudent));

 // Task 5. Combining Arrays

 let x = [23,45,57];
 let y = [12,89];
 let resultt = x.concat(y);
 console.log(resultt);