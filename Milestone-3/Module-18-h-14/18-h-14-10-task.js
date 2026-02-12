// task 1
const drinkPrice = 600;
if (drinkPrice >= 500) {
    console.log("You deserve e free coke ");
}
else {
    console.log("cock price : 30tk");
}

//Task-2 BMI Calculator


let weight = 78;
let height = 1.7;
let BMI = weight / (height ** 2);
console.log(BMI);
if (BMI < 18.5) {
    console.log("you are underweight.")
}
else if (BMI >= 18.5 & BMI <= 24.9) {
    console.log("you are normal.")
}
else if (BMI >= 25 & BMI <= 29.9) {
    console.log("you are overweight.")
}
else {
    console.log(" you are obese.")
}

// Task three nested friend

let myScore = 85;
let friendScore = 35;
if (myScore > 80) {
    if (friendScore > 80) {
        console.log("go for a lunch.")
    }
    else if (friendScore >= 60){
        console.log(" good luck next time. ")
    }
    else if (friendScore >= 40){
        console.log(" keep your friend's message unseen.")
    }
    else{
        console.log("I am here No Tension")
    }
}
else{
    console.log("go to home and sleep and act sad")
}


// ternary or if else 

let num1 = 40;
let num2 = 30;
let result;
if (num1 > num2){
    result = num1 *2;
}
else{
    result = num1 + num2;
}
console.log(result);

// ternary 
let Num1 = 50;
let Num2 = 70;
let Result = (Num1 > Num2)? Num1 * 2 : Num1 + Num2;
console.log("Final Result :",Result);

// Ticket fare Calculator

let age = 19;
let isStudent = true;
let fare = 800;
let ticketPrice;
let amount;
if(age < 10){
    ticketPrice = 0;
}
else if(isStudent === true){
    amount = fare * 50 / 100;
    ticketPrice = fare - amount;
}
else if(age >= 60){
    amount = fare * 15 /100;
    ticketPrice = fare - amount;
}
else{
    ticketPrice = fare;
}
console.log("Ticket Price :", ticketPrice, "tk");