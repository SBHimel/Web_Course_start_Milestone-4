// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.



/*programming hero*/
for(let i=1; i<=60; i++){
    console.log(i,"I will invest at least 6 hrs every single day for next 60 days!")
}

// Find all the odd numbers from 61 to 100.
for(let i=61; i<=100; i=i+2){
    console.log("odd",i)
}
// Find all the even numbers from 78 to 98.
for(let i=78; i<=98; i+=2){
    console.log("even :",i)
}
// bikolpo
for(let i=78; i<=100; i++){
    if(i%2!==0){
        continue;
    }
    console.log("another way even :", i);
}

// Display sum of all the odd numbers from 91 to 129.
let sum = 0;
for(let i=91; i<=129; i++){
    if(i % 2 === 0){
        continue;
    }
    sum = sum + i;
    console.log("Sum of odd numbers from 91 to 129 is:", sum);
}

// Display sum of all the even numbers from 51 to 85.
let summ = 0;
for(let i = 51; i<=85; i++){
    if(i%2 !==0){
        continue;
    }
    summ = summ + i;
    console.log("Sum of odd numbers from 51 to 85 is:", summ);
}

//Generate a multiplication table for number 9

for(let i = 1; i<= 10; i++){
    let multiplication = 9*i;
    console.log("9 x " + i + " = " + multiplication);
}


/* Implement a countdown timer that counts down from 81 to 65. */

for(let i = 81; i >= 65; i--){
    console.log(i);
}
