
// const Math = {
//     min: function min(num1, num2){
//         return num2;
//     }
// }
// console.log(Math.max);

const min = Math.min(45,21,65,99,126,5,-99);
console.log(min);

const max = Math.max(45,21,65,99,126,5,-99);
console.log(max);

console.log(Math.PI);
console.log(Math.abs(5-10));
console.log(Math.abs(-5));
console.log(Math.round(2.5));
/* Math.floor() ফাংশনের কাজ হলো যেকোনো সংখ্যা কে “নিচের (lowest)” পূর্ণসংখ্যায় রাউন্ড করা।
 */
console.log(Math.floor(4.9));   // Output: 4
console.log(Math.floor(4.1));   // Output: 4
console.log(Math.floor(-4.1));  // Output: -5
console.log(Math.floor(-4.9));  // Output: -5
/* Math.ceil() – উপরের পূর্ণসংখ্যা (Round Up)

সবসময় সংখ্যা উপরের দিকে রাউন্ড করে।

অর্থাৎ যেকোনো দশমিক সংখ্যা → সবচেয়ে বড় পূর্ণসংখ্যা।
 */
console.log(Math.ceil(4.7));    // Output: 5
console.log(Math.ceil(4.1));    // Output: 5
console.log(Math.ceil(-4.7));   // Output: -4
console.log(Math.ceil(-4.1));   // Output: -4

console.log(Math.random());  
// Output: 0.123456789 (প্রত্যেকবার ভিন্ন সংখ্যা)

console.log(Math.random() * 10);  
// Output: 0 থেকে 10 এর মধ্যে কোনো দশমিক সংখ্যা

console.log(Math.floor(Math.random() * 10));  
// Output: 0 থেকে 9 এর মধ্যে কোনো পূর্ণসংখ্যা
