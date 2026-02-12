
// ---------inch to feet----------
// 12 inch te 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);  //output 6.25


function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);  //👉 parseInt() decimal ba doshomic er porer ongsota  বাদ দেয়
    const inchRemaining = inch % 12;
    const result = feetNumber + " feet " + inchRemaining + "inch."
    return result;   // output 6 ft 3inch.
}

const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2);



// -------------Miles to kilometre--------------

// Miles to kelometre
function mileKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const mile = mileKilometer(2);
console.log(mile);

// kilometre to mile
 
function kilometreToMile(kilo){
    const miles = kilo * 0.621371;
    return miles;
}
const ans = kilometreToMile(25);
console.log(ans);