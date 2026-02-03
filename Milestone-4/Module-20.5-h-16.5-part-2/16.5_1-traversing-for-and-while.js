/* 
******** LOOPING Technique
* 1.  for loop 
* 2. while loop
* 3. do while
* 4. for in  --> array korar jonno
* 5. for of   --> object loop korar jonno
*/

const friends = ["Elon", "Bill", "Mark", "Waren"];

for(const friend of friends){
    console.log(friend);
}
/* OUTPUT
Elon
Bill
Mark
Waren
 */

for(let i = 0; i< friends.length; i++){   /* i<= friends.length; er mane hocche frriend er dhorgo onujayi loop colbe */
    console.log(i);
    console.log(friends[i]);
}
/*  OUTPUT
0
Elon
1
Bill
2
Mark
3
Waren
 */

const numbers = [5, 34,567578,343,565345,343,56,34,]

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

/* OUTPUT
5
34
567578
343
565345
343
56
34
 */


//  while loop use kore

let i = 0;
while(i < friends.length){
    console.log(friends[i])
    i++;
}

// 2nd ta
let n = 0;
while(n < numbers.length){
    console.log(numbers[n])
    n++;
}