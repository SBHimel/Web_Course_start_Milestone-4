for( let i = 0; i < 15; i++){
    console.log(i);
    if(i >= 10){
        break;
    }
}
console.log("life after break up");

// while loop use kore 
let n = 54;
while(n > 25){
    if(n<=50){
        break;
    }
    console.log(n);
    n--;
}


// continue --> skip this one iteration
// break --> i am done with this loop. loop end.
/* 

break:
Loop চলাকালীন break পেলে loop সাথে সাথে শেষ হয়ে যায়।

continue:
continue পেলে বর্তমান iteration skip হয়,
কিন্তু loop পরের iteration থেকে চলতে থাকে।

*/

for(let i = 1; i<10; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i);
}

// while loop
let x = 0;
while(x<50){
    x++;
    if(x%5 !== 0){
        continue
    }
    console.log(x);
}