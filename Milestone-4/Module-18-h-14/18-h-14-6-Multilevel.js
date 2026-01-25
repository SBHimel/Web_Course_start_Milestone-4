/* 
MULTI_LEVEL CONDITION
 */

const price = 4000;
if(price >= 5000){
    // 10% Discount
    const discount = price * 10 / 100;
    console.log(discount);
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price > 2500){
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}






//  age onujhayi discount
const age = 40;
const eatPrice = 500;
if(age <= 12){
    console.log('You can eat for free')
}
else if(age >= 60){
    // 50% discount
    const discount = eatPrice * 50 /100;
    const payAmount = eatPrice - discount;
    console.log(payAmount);
}
else if (age >= 50){
    // 25% discount
    const discount = eatPrice * 25 /100;
    const payAmount = eatPrice - discount;
    console.log(payAmount);
}
else if(age >= 40){
    // 10% discount
    const discount = eatPrice * 10 /100;
    const payAmount = eatPrice - discount;
    console.log(payAmount);
}
else{
    console.log(eatPrice);
}


// grade nirnoy nij theke 
const number = 75;
if(number >= 80 && number <= 100){
    console.log("You got A+");
}
else if (number >= 70){
    console.log("You got A-");
}
else if (number >= 60){
    console.log("You got A");
}
else if (number >= 50){
    console.log("You got B");
}
else if (number >= 40){
    console.log("You got c");
}
else if (number >= 33){
    console.log("You got D");
}
else{
    console.log("You Fail")
}