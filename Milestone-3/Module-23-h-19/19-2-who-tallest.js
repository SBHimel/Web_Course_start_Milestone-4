const heights = [65, 66, 68, 72, 75, 60];

function getMax(numbers) {
    let max = numbers[0];         // Step 1: প্রথম element কে max ধরে নিই
    for (const num of numbers) {    // Step 2: array এর প্রতিটি element এর মধ্যে loop চালাই
        if (num > max) {            // Step 3: যদি current number max থেকে বড় হয়
            max = num;            // তাহলে max update করি
        }
    }
    return max;                    // Step 4: loop শেষ হলে max return করি
}

const max = getMax(heights);      // function call, max কে variable এ রাখলাম
console.log("max value is", max); // print



// -----------------sohoje-----------------

const heightss = [65, 66, 68, 72, 75, 60, 99];

// spread operator (...) দিয়ে array কে আলাদা আলাদা arguments হিসেবে পাঠানো হচ্ছে Math.max-এ
const maxx = Math.max(...heightss);

console.log("max value using Math.max is", maxx);
