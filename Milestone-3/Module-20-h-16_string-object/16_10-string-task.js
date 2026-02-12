/* 
Task-1:
Count how many times a string has the letter a or A
 */
let hello = "Amar sunar Bangladesh";
let count = 0;

for(let i = 0; i < hello.length; i++){
    if(hello[i] == "a" || hello[i] == "A"){
    count++;
}

}
console.log(count);



/* Task-3:
Check whether a string contains all the vowels a, e, i, o, u
 */

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


//Task-4:
//If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let bodlao = "XXylophone and x-ray";

// small 'x' → 'y', capital 'X' → 'Y'
let newStr = bodlao.replace(/x/g, "y").replace(/X/g, "Y");

console.log(newStr);  // Output: "Yylophone and y-ray"



/* Task-5:
Capitalize Every first Letter of each word in a String
 */
let hmm = "amar bangladesh is beautiful";
let words = hmm.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

let newStrr = words.join(" ");
console.log(newStrr);
