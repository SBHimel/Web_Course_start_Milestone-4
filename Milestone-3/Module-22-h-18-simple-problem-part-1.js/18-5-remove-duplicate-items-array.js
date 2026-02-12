/* 
* array has some duplicate elements
* []
*/
//Remove duplicate items from an array

const biriyanikhor = ["abul","abul", "babul", "babul", "cabul", 'dabul', "kabul", "cabul"];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array) {
    const unique = [];
    for(const item of array){
        if(unique.includes(item)===false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(biriyanikhor);
console.log(uniqueArray);
/* 
bekkha: 
includes() → আছে নাকি নাই

=== false → নাই

নাই হলে → ঢুকাও
*/