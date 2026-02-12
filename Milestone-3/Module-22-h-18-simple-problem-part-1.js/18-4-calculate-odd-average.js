/* 
*  function takes an array as parameter 
* give me the average of the odd numbers in the array
*/

/* “একটি সংখ্যার array দেওয়া আছে। array থেকে বিজোড় (odd) সংখ্যাগুলো বের করে তাদের গড় (average) নির্ণয় করার জন্য একটি function লেখো।”
 */
function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            console.log(number);
            odds.push(number)
        }
    }
    console.log(odds);
    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum,count);
    const avg = sum / count;
    return avg;
}
const numbers = [52, 13, 58, 65, 81,7];
const avg = oddAverage(numbers);
console.log("average of the odd numbers is", avg);