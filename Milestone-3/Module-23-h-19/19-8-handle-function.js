
//--------দুইটা জিনিস number কিনা চেক করা---------

function multiply(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return 'please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}
const result = multiply(5, "seven");
console.log(result);




// দুইটা নাম (first name + last name) জোড়া দিয়ে একটা full name বানানোর জন্য।
function fullName(first, second) {
    if (typeof first !== "string") {
        return "Please provide a string"
    }
    else if (typeof second !== "string") {
        return "Second Name should be a string"
    }
    const full = first + " " + second;
    return full;
}
// const full = fullName("Md", "Himel");
const full = fullName(2, "Himel");
console.log(full);


function getPrice(product) {
    if (typeof product.price) {
        return "Please provide an object"
    }
    const price = product.price;
    return price;
}
const price = getPrice({ name: "chlkani dandi", price: 35, color: "green" });
console.log(price)



/* 👉 একটা array থেকে দ্বিতীয় element বের করে,
👉 কিন্তু তার আগে check করে নেয় input সত্যিই array কিনা। */

function getSecond(numbers) {
    // প্রথমে check করা হচ্ছে input টা array কিনা
    if (Array.isArray(numbers) === false) {
        return 'Please provide an array';     // array না হলে message return
    }

    // array হলে ২য় element (index 1) বের করা হচ্ছে
    const second = numbers[1];
    return second;                            // ২য় element return
}

// ফাংশন কল করা হচ্ছে (ভুল input দেওয়া হয়েছে)
const second = getSecond(45);
console.log(second);                         // তাই error message print হবে
