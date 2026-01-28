//  Write a loop 1 to 200. Use break to exit the loop once you find 100

for(let i=1; i<=200; i++){
    console.log(i);
    if(i>=100){
        break;
    }
}

/* Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100 */

let sum = 0;
for(let i = 1; i<=200; i++){
    sum = sum + i;
    console.log(i);
    if(i>=100){
        break;
    }
}
console.log("sum of numbers from 1 to 100 is", sum);

/* Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.) */

// Step 1: loop 1 থেকে 100 পর্যন্ত
for(let i = 1; i <= 100; i++) {
    let sqr = Math.sqrt(i);
    if(sqr % 1 === 0) {
        console.log("Found square number:", i);
        break;
    }
}

// 1 থেকে 100 পর্যন্ত সব perfect square numbers খুঁজে বের করা
let squares = []; // square numbers collect করার জন্য array

for(let i = 1; i <= 100; i++){
    let sqr = Math.sqrt(i);
    if(sqr % 1 === 0){ // perfect square check
        squares.push(i); // array-তে যোগ করা
    }
}

console.log("Perfect square numbers from 1 to 100 are:", squares);
