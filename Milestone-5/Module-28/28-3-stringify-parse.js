/* 
🔵 1️⃣ JSON.parse()
📌 কাজ কী?

JSON string → JavaScript object বানায় */
let data = '{"name":"Himel","age":22}';
let obj = JSON.parse(data);

console.log(obj);


/* 🔹 JSON.stringify()

👉 JavaScript object → JSON string বানায়
 */
let user = {
  name: "Himel",
  age: 22
};

let jsonString = JSON.stringify(user);

console.log(jsonString); //{"name":"Himel","age":22}

/* 
🌊 1️⃣ ভাবো Fetch কী?

fetch() = “আমি server থেকে কিছু data চাই”

Browser → server → data আসবে
 */

const load = () =>{
  fetch("https://randomuser.me/api/")   // server কে data চাও
  .then(response => response.json())  // JSON string → JS object
  .then(data => console.log(data));   // console এ দেখাও
}

console.log('hello')

  // Code: Fetch + JSON (Step by Step)
fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => {
    let user = data.results[0];
    console.log(user.name.first + " " + user.name.last);
  });