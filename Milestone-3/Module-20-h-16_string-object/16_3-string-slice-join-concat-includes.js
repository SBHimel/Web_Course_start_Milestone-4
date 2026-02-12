
// 'slice() — স্ট্রিং থেকে অংশ কাটা'

const address = "andorkilla";
const part = address.slice(2,5);
console.log(part);

const sentence = "I am a good hardworking person.";
console.log(sentence.split());

let word = "Himel";

let arr = word.split("");

console.log(arr);
// ["H", "i", "m", "e", "l"]


//  🔹 Example 2: Space অনুযায়ী ভাগ
let senten = "I love JavaScript";

let words = senten.split(" ");

console.log(words);
// ["I", "love", "JavaScript"]


// 🔹 Example 3: Comma অনুযায়ী ভাগ

let data = "apple,banana,mango";

let fruits = data.split(",");

console.log(fruits);
// ["apple", "banana", "mango"]

// 🔹 Example 4: Limit ব্যবহার
let text = "a-b-c-d-e";

console.log(text.split("-", 3));
// ["a", "b", "c"]
