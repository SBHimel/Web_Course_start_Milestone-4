/* 
* year will be a leap year if  the year is divisible by 4
*/
// simple logic
function isLeapYear (year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLipi = isLeapYear(2025);
console.log(isLipi);




// details leap year
/* নিয়ম ১: ৪ দিয়ে ভাগ গেলে সেটি লিপ ইয়ার।

নিয়ম ২: কিন্তু ১০০ দিয়ে ভাগ গেলে সেটা হবে না।

নিয়ম ৩: তবে ৪০০ দিয়ে ভাগ গেলে সেটা অবশ্যই হবে।
 */
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // এটি লিপ ইয়ার
    } else {
        return false; // এটি লিপ ইয়ার নয়
    }
}

console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(2026)); // Output: false
console.log(isLeapYear(1900)); // Output: false