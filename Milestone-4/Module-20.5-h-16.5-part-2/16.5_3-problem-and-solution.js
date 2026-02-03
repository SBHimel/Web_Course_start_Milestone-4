/* 
👉 এটা Array এর element গুলোকে ascending বা alphabetical order এ arrange করে
👉 মূল array কে modify করে, নতুন array return করে না */

let fruits = ["Banana", "Apple", "Mango"];
fruits.sort();
console.log(fruits);


const person = ['rakib', 'nokib', 'sakib',"Pakib", 'akib', 'dakib', "anis"];
const sortedPersons = person.sort();
console.log(sortedPersons);

/* sort -->mane hocche sajanu eta 2 vabe hote pare
*/
// const numbers = [4, 7, 2, 8, 3, 6];

/* Ascending ----> smaller to larger: [2, 3, 4, 6, 7, 8]
Descending --> larger to smaller: [8, 7, 6, 4, 3, 2]
*/
 const numbers = [4, 7, 12, 8, 43, 1];
 //const numbers_asc = numbers.sort()  //not working properly
const numbers_asc = [...numbers].sort(function(a,b)  {return a-b})   // Ascending kora hoyeche

const numbers_dsc = [...numbers].sort(function(a,b)  {return b-a})   // Descending kora hoyeche
console.log(numbers_asc);
console.log(numbers_dsc);