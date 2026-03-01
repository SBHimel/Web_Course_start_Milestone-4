/* 🔹 1️⃣ undefined কী?

👉 JavaScript নিজে থেকে দেয়
👉 মানে: “value এখনো দেওয়া হয়নি”
 */
//Example 1 – Variable declare but value নাই
let a;
console.log(a);//undefined

//Example 2 – Function return না করলে

function test() {}
console.log(test());//undefined

//Example 3 – Object property না থাকলে
let user = { name: "Himel" };
console.log(user.age); //undefined

/* 🔹 2️⃣ null কী?

👉 Developer নিজে থেকে দেয়
👉 মানে: “এখানে ইচ্ছা করে কিছু নাই”
 */

let data = null;
console.log(data);//null