/* Ternary --> three parts 

   ?    :
   
   condition ? do something when true : do something when false
   */
const age = 20;
// if(age >= 18){
//     console.log("You can vote.")
// }
// else{
//     console.log("Jao baccha ghumai thako")
// }

age  >= 18 ? console.log("Vote Dio") : console.log("ghumai thako");



let price = 500;
const isLeader = false;

if(isLeader === false){
    price = 0;
}
else{
    price = price + 100;
}
console.log(price)

// ternary
let pri = 100;
const isLeadeer = false;
pri = isLeadeer === true ? 0 : pri + 100;

console.log(pri);

// ektu advaned ternary
// let prices = 500;
// const isLead = false;
// if(isLead === true){
//     if(prices > 1000){
//         prices = price / 2;
//     }
//     else{
//         prices = 0;
//     }
// }
// else{
//     prices = prices + 100;
// }
// console.log(prices);
// prices > 1000 ? prices/2 : 0

// ternary
let prices = 500;
const isLead = false;
prices = isLead === true ? prices > 1000 ? prices/2 : 0 : prices + 1000;
console.log(prices);
