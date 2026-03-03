function test() {
    let x = 5;

    return function () {
        console.log(x);
    };
}

const t = test();
t(); 

// Counter Example (সবচেয়ে important)
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const c = counter();

c(); // 1
c(); // 2
c(); // 3

const a = counter();
const b = counter();
a(); // 1
a(); // 2
b(); // 1

// 🔹 Practice Problem – Closure

function makeCounter(){
    let count = 0;
    return function (){
        count++;
        return count;
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log("this is 1:", counter1());
console.log("this is 1:", counter1());
console.log("this is 1:", counter1());
console.log("this is 2:", counter2());
console.log("this is 1:", counter1());
console.log("this is 2:", counter2());
console.log("this is 2:", counter2());
console.log("this is 2:", counter2());