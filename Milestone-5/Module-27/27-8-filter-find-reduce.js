/* 1️⃣ filter()
🔹 মূল ধারণা

Array এর প্রতিটা element পরীক্ষা করে

যে elements condition satisfy করে, তাদের নিয়ে নতুন array বানায়

মূল array অপরিবর্তিত থাকে
 */
//1️⃣ filter()

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(num){
    return num % 2 === 0;
});

console.log(evenNumbers); //[2, 4]

// 2️⃣ find()

const numbers2 = [1, 2, 3, 4, 5];

const firstEven = numbers.find(function(num){
    return num % 2 === 0;
});

console.log(firstEven); // 2

// 3️⃣ reduce()

const numbers3 = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(acc, cur){
    return acc + cur;
}, 0);

console.log(sum);

// 5️⃣ Real Life Example

const users = [
  {name: "Himel", age: 20},
  {name: "Rahim", age: 25},
  {name: "Karim", age: 18}
];
// 🔹 Filter: Age > 20
const older = users.filter(user => user.age > 20);
console.log(older);

// 🔹 Find: First under 20
const teen = users.find(user => user.age < 20);
console.log(teen);

// 🔹 Reduce: Total age
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge);