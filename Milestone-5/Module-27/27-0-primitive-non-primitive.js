let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
/* 💡 কেন?

কারণ primitive copy করলে value copy হয়, reference না। */

// 🟣 Non-Primitive (Reference Type)
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1,2,3,4]
console.log(arr2); // [1,2,3,4]