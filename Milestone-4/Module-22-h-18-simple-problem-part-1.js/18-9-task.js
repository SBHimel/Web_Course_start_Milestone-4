/* Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
 */
function celsiusTofahren(c) {
    const f = (c * 1.8) + 32;
    return f;
}
const ans = celsiusTofahren(20);
console.log("Fahrenheit is", ans);





/* Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.
 */


function countNumber(numbers, find) {
    let count = 0;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] == find) {
            count++;
        }
    }
    return count;
}
const numbers = [5, 5, 6, 11, 12, 98, 5];
const final = countNumber(numbers, 5);
const find2 = countNumber(numbers, 25);
console.log(final, find2)


/* Task-3:
Write a function to count the number of vowels in a string.
 */

function vowels(vow) {
    let count = 0;
    const vowelLatter = "aeiouAEIOU"; // ছোট-বড় সব vowels

    for (let i = 0; i < vow.length; i++) {
        if (vowelLatter.includes(vow[i])) { // check if current letter is vowel
            count++;
        }
    }

    return count;
}

const valu = vowels("Amar sunar bangla amI tumi valo basi");
console.log(valu); // Output: 14



// another way ony poddho tite

let str = "Himel Er piyo Bangladesh";   // string
let lowerStr = str.toLowerCase();    // capital letters handle
let countt = 0;                      // counter

for (let i = 0; i < lowerStr.length; i++) {
    if (
        lowerStr[i] == "a" || 
        lowerStr[i] == "e" || 
        lowerStr[i] == "i" || 
        lowerStr[i] == "o" || 
        lowerStr[i] == "u"
    ) {
        countt++;
    }
}
console.log(countt);  // output: total vowels



/* Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

function longestWord(str) {
    let words = str.split(" "); // string কে words এ ভাগ করা
    let longest = "";           // largest word রাখার জন্য

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;    // বড় word পেলে replace
        }
    }

    return longest;
}

// Test
const sentence = "I am learning Programming to become a programmer";
console.log(longestWord(sentence)); // Output: Programming

/* 
split(" ") → string কে array of words এ convert করে

word.length → word এর length check করে

simple for-of loop ব্যবহার করা → beginner-friendly

tie হলে প্রথম বড় word return হয়





 */
/* Task-5:
Generate a random number between 10 to 20.
 */

const random = Math.floor(Math.random() * 11) + 10;
console.log(random);
