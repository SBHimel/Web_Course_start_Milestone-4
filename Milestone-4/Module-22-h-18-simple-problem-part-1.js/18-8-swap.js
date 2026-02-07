

//swap ba odol bodol korte hole age amader ekta temporary patro lagbe

let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log(a, b); // 10 5

//Destructuring (সবচেয়ে clean & modern ✅)
// Destructuring ---> কোনো temp লাগেনা

let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(x, y);

//-------------------------