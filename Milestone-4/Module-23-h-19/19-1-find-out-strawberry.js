
const disha = 56;
const salman = 95;

if(disha > salman){
    console.log("Disha will get the streawberry");
}
else{
    console.log("salma will eat the streawberry")
}



//inside a function --> ekhon function diye korle 
function getMax (num1, num2){
    if(num1 > num2){
        return num1
    }
    else{
        return num2;
    }
}
console.log("max of num:",getMax(5,10));





//  ekhon jodi 3 ta sonkhar upor max ber korte hle

const jim = 156;
const tim = 89;
const kim = 98;
if(jim > kim && jim > tim){
    console.log("biggest is:", jim);
}
else if(kim>tim){
    console.log("biggest is:", kim);
}
else{
    console.log("biggest is:",tim);
}

//funtion use kore jodi 3ta sonkhar majhe boro sonkha ber korte

function biggestNumber(jim, tim, kim) {
    if (jim > tim && jim > kim) {
        return jim;
    } 
    else if (tim > kim) {
        return tim;
    } 
    else {
        return kim;
    }
}

// function call
const result = biggestNumber(56, 89, 68);
console.log("biggest issssssssssss:", result);

// math use kore
const maxxx = Math.max(12,1,56,5);
console.log("max is using Math.max", maxxx);
