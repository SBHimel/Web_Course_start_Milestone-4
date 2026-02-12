/* 
Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.
 */

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const rev_colors = [];
for(const colrs of colors){
    rev_colors.unshift(colrs)
}
console.log(rev_colors)
/* Output:
['orange', 'yellow', 'green', 'blue', 'red'] */
//another way

const reverse_colors = [];
for (let i = 0; i < colors.length; i++){
    const colorr = colors[i];
    reverse_colors.unshift(colorr);
}
console.log(reverse_colors)



/* Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.
 */
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = []; // Even numbers রাখার জন্য খালি array
for(let i = 0; i < numbers.length; i++){
    if(numbers[i]%2 === 0){
        evenNumbers.push(numbers[i]);  //Even হলে evenNumbers array-তে push করি।
    }
}
console.log(evenNumbers); 
// Output: [12, 98, 78, 46]



/* Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.
 */

var number = ['Tom', 'Tim', 'Tin', 'Tik']
let str = "";
for(const numm of number){
    console.log(numm);
    str += numm;
}
console.log("Final string:", "'"+str+ "'"); 
// "TomTimTinTik"



/* Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
 */
const statement = 'I am a hard working person'

// 1. sentence কে words এ ভাগ করি
const words = statement.split(' '); // ['I', 'am', 'a', 'hard', 'working', 'person']

// 2. words array reverse করি
const reversedWords = words.reverse(); // ['person', 'working', 'hard', 'a', 'am', 'I']

// 3. আবার string বানাই
const result = reversedWords.join(' ');

console.log("'"+result+"'"); // Output: "person working hard a am I"