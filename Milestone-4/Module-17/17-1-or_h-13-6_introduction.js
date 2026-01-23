/* ১️⃣ Variable declare করার ধরন

var → Function/global scope, পরে change করা যায়, redeclare করা যায়

var x = 10;


let → Block scope, পরে change করা যায়, redeclare না

let score = 50;


const → Block scope, মাস্ট assign value, পরে change করা যায় না

const pi = 3.14;

২️⃣ Variable নামের নিয়ম

শুরু হবে letter, $ বা _ দিয়ে

let name;
let $price;
let _count;


Number দিয়ে শুরু হবে না

// let 2value; ❌ ভুল


No space / special character

// let first name; ❌ ভুল


Case-sensitive

let age = 20;
let Age = 30;


Reserved keywords ব্যবহার করা যাবে না

// let if = 10; ❌ ভুল

৩️⃣ Initial value

const declare → শুরুতেই assign

let / var → পরে assign করা যাবে

const birthYear = 2005;
let score;
score = 100;

৪️⃣ Best Practices (ভালো অভ্যাস)

নাম বর্ণনামূলক রাখো: userName, totalScore

CamelCase ব্যবহার করো: firstName, totalAmount

Block scope এ declare করো, global কম use করো */

var weight = 38;
var price = 38;
var money = 1995;
var age = 2006;
console.log(money);
console.log(price);


var gol = 3;
gol = 35;
console.log(gol);

var name = "Safoan Bhuiyan"
console.log(name);

var Rich = true;
console.log(Rich);
var Dal = false;
console.log(Dal);
console.log(typeof Dal);
console.log(typeof name);
var price = 555;
console.log(typeof price);


/* ১️⃣ Camel Case

প্রথম শব্দ ছোট, পরের শব্দের প্রথম letter বড়

সাধারণত JavaScript standard

let firstName = "Himel";
let totalScore = 100;

২️⃣ Pascal Case

সব শব্দের প্রথম letter বড়

সাধারণত class বা constructor function এ use হয়

let UserName = "Himel";
class UserAccount {}

৩️⃣ Snake Case

শব্দগুলোকে _ দিয়ে আলাদা করা

সাধারণত Python এ বেশি use হয়, JS-এ কম

let first_name = "Himel";
let total_score = 100;

৪️⃣ Kebab Case

শব্দগুলোকে - দিয়ে আলাদা করা


 */