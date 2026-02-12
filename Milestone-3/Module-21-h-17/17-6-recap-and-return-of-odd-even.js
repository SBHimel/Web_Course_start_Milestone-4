function add(price1, price2) {
    const total = price1 + price2;
    return total;
}
add(5, 80)  // return use korle eivabe output pawa jabe na karon : return e console.log nai
// tai ekta veriable e rekhe sei veriable ke console.log korte hobe

const bill = add(5, 80);
console.log(bill);


//eta abar short kore o kora jay
function add2(price1, price2) {
    return price1 + price2;
}
const bill2 = add(105, 80);
console.log(bill2);



//arekta
function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}
const done = doMath(10, 5);
console.log(done);


//    -------EVEN------ 
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(5));
console.log(isEven(104));


//-----------Odd-----------

function isOdd(number) {
    if (number % 2 ===1){
        return true;
    }
    return false;
}
console.log(isOdd(10));
console.log(isOdd(7));