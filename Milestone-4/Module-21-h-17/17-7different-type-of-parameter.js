/* 
* for a given string tell me whether it has even number of characters or not
*/

function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log("even size");
    }
    else {
        console.log("odd size")
    }

}
evenSizedString("Dhaka");
evenSizedString("Kamauraa");



//----------arekta -----------
function doubleOrTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));



// -------Array use kore--------
function numberOfElements(numbers) {
    const len = numbers.length;
    return len;
}
const total = numberOfElements([12, 45, 78, 1212154, 4, 5]);
console.log(total); // 6



function getAge(age){
    return age;
}
const ageOut = getAge(19);
console.log(ageOut); // 19
