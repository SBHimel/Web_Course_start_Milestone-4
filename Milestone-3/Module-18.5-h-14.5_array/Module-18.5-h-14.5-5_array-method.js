const friends = [ 'himel','bhuiyan', 'safoan', 'salam', 'kalam'];
console.log(friends.includes('gelam'));
console.log(friends.includes('bhuiyan'));

if(friends.includes('himel')){
    console.log('Party')
}
else(
    console.log('no food. we are fasting')
)

// indexOf

const team = ['bangla', 'english', 'somaj', 'biggan', "islam"];
console.log(team.indexOf("biggan"));
console.log(team.indexOf("bian"));

// array kina check korte korte 

console.log(Array.isArray(team))
const age = 15;
console.log(Array.isArray(age))

// join() --> 👉 array এর সব element কে একসাথে জোড়া দিয়ে একটা string বানায়। 
// 🔹 join এর ভেতরে যা দিবে, সেটাই separator হবে।

let fruits = ["apple", "banana", "mango"];
let result = fruits.join("--");
console.log(result);

//concat() --> 👉 এক বা একাধিক array কে মিলিয়ে নতুন array বানায়।

let a = [1, 2, 3];
let b = [4, 5];
let resul = a.concat(b);

console.log(resul);

//3) slice() → array থেকে কেটে নেয় (কিন্তু মূল array বদলায় না)

let numbers = [10, 20, 30, 40, 50];

let Result = numbers.slice(1, 4);
console.log(Result);

//4) splice() → array কাটে / ঢোকায় (মূল array বদলায়)

let nums = [1,2,3,4,5];
nums.splice(1,3);
console.log(nums);
