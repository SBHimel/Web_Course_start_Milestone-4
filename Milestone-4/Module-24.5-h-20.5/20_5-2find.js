const numbers = [12, 13, 45, 89, 78];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

//---------for of use ----------

for (const number of numbers) {
    console.log(number);
}


// -----ফোনগুলোর একটি array (array of objects)

const phones = [
    { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
    { name: "xoami", price: 18000, camera: "12mp", color: "black" },
    { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
    { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
    { name: "Walton", price: 31000, camera: "12mp", color: "black" },
    { name: "HTC", price: 7000, camera: "12mp", color: "black" },
];

function matchedProducts(phones, search){
    const matched = []; // match হওয়া ফোন রাখা হবে এখানে

    for(const phone of phones){
        // search word নামের মধ্যে আছে কি check
        if(phone.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(phone); // match হলে array তে push
        }
    }

    return matched; // matched phones return
}

const result = matchedProducts(phones, "ton"); // name e thaka data er moddhe kotota ton ache ta khuje ber kore
console.log(result); // output দেখাবে [{ name: "Iphone", ... }]
