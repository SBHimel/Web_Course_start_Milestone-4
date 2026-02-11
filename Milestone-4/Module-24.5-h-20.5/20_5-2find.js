const numbers = [12, 13, 45, 89, 78];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

//---------for of use ----------

for (const number of numbers) {
    console.log(number);
}



const phones = [
    { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
    { name: "xoami", price: 18000, camera: "12mp", color: "black" },
    { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
    { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
    { name: "Walton", price: 31000, camera: "12mp", color: "black" },
    { name: "HTC", price: 7000, camera: "12mp", color: "black" },
]