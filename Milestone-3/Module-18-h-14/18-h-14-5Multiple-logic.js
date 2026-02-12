const salary = 25000;
const isBCS = true;
const height =68;
const hasCar = false;
// && er mane hocche 2 tai sotti hte hbe

// if(salary > 20000 && height > 66){
//     console.log("su-----patro");
// }
// else{
//     console.log("onno patro khuji")
// }

// jekunu ekta sotti hlei hbe

if (salary > 25000 || height > 72){
    console.log("eso baba kobul");
}
else{
    console.log("Vaag tui mokbul")
}

// more and more condition
if (salary > 25000 || height > 72 || isBCS == true){
    console.log("eso baba kobul");
}
else{
    console.log("Vaag tui mokbul")
}

// --------------COMPLEV CONDITION---------------
if((salary > 25000 && hasCar == true)|| isBCS == true) {
    console.log('tomar 14 gosti raji')
}

if((salary > 24000 || hasCar == true)&& isBCS == true) {
    console.log('tomar 14 gosti rajiiiiiiiiii')
}