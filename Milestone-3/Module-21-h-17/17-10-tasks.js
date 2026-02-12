/* 
Task-1
Take four parameters. Multiply the four numbers and then return the result
 */

function multiply(a, b, c, d) {
    const ans = a * b * c * d;
    return ans;
}
const total = multiply(2, 3, 4, 5);
console.log("multiply ans:", total);







/* Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function evenOdd(number) {
    if (number % 2 === 0) {
        const even = number / 2;
        return even;
    }
    else{
        const odd = number * 2;
        return odd;
    }
}
const eve = evenOdd(8);    // 4  (even → divide)
console.log("result:", eve);
// eivabe short koreo likha jay 2 line na likhe
console.log(evenOdd(5));





/* Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

function count_zero(numbers){
    let count = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === '0'){
            count++;
        }
    }
    return count;
}
const bin_str = count_zero("100011001010")
console.log("Number of zeros:", bin_str); // 5


/* 
Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */
function odd_even(num){
    if(num % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
const eveen = odd_even(8);
console.log("result:", eveen);
// eivabe short koreo likha jay 2 line na likhe
console.log(odd_even(5));