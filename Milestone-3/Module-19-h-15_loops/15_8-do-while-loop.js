/* while loop → আগে শর্ত চেক → তারপর কাজ।
do...while loop → আগে একবার কাজ → তারপর শর্ত চেক। */

let x = 0;
while(x<50){
    x++;
    if(x%5 !== 0){
        continue
    }
    console.log(x);
}

// do while loop

let n = 0;
do{
    console.log(n);
    n++;
}
while(n < 5)