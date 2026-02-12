var orangePrice = 20;
var chocolate = 0.5;
var applePrice = 26;
var banana = "30";
var kola =parseInt("25.5");
var kola =parseFloat("25.6");

console.log(orangePrice);
console.log(typeof orangePrice);
console.log(typeof applePrice);

console.log(orangePrice + applePrice);
console.log(banana + applePrice);
console.log(kola + applePrice);
console.log(typeof kola);

var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total.toFixed(3));

/* short hand */
var price = 35;
// price = price + 10
price += 10;
console.log(price);

var fridge = 35000;
// fridge = fridge -1000;
fridge += 1000;
console.log(fridge);

var heay = "Safoan";
var hi = "Bhuiyan";
var ok = heay+hi;
console.log(ok);
console.log("50"+10);
console.log("50"-10);
console.log(50-"10");
