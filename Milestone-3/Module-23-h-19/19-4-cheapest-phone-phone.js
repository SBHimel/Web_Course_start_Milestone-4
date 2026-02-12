
/* ---------আমাদের কাজ: সবচেয়ে কম দামটা বের করা--------- */

const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000]

function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const cheap = getMin(prices);
console.log("cheapest one is:", cheap);




// --------------object er array theke kole-----------

const phones = [
    { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
    { name: "xoami", price: 18000, camera: "12mp", color: "black" },
    { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
    { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
    { name: "Walton", price: 31000, camera: "12mp", color: "black" },
    { name: "HTC", price: 7000, camera: "12mp", color: "black" },
]
function getCheapestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price < min.price){
            min=phone;
        }
    }
    return min;
}
const cheaps = getCheapestPhone(phones);
console.log("Cheapest phone is:", cheaps);