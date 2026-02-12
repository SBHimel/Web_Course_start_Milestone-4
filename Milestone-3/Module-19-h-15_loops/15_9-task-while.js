// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
let i = 0;
while(i <= 60){
    console.log(i,"I will invest at least 6 hrs every single day for next 60 days!")
    i++;
}

// Find all the odd numbers from 61 to 100.
let ii = 61;
while(ii <= 100){
    console.log("odd",ii);
    ii = ii+2;
}

//Find all the even numbers from 78 to 98.
let iii = 78;
while(iii <=98){
    console.log("even",iii);
    iii = iii + 2;
}

// Display sum of all the odd numbers from 91 to 129.

let sum = 0;
let j = 81;
while(j <= 131){
    sum = sum + j;
    console.log("odd",j);
    j=j+2;
}

// othoba
let summ = 0;
let jj = 81;
while(jj <= 131){
    if(jj % 2 === 0){
        jj++; 
        continue;
    }
    summ = summ + jj;
    console.log("odd", summ);
    jj++;  
}
