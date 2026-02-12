const school = 'Himel Uttara Model School';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = "Chemisty";
const book = "chemistry";

if (subject === book) {
    console.log("I am reading book aibar exam pathaiya dimu")
}
else {
    console.log("huda hudai")
}

// milaite subject and book er value milaite

if (subject.toLowerCase === book.toLowerCase) {
    console.log("I am reading book aibar exam pathaiya dimu")
}
else {
    console.log("huda hudai")
}

const drink = 'water';
const liquid = '  water   ';
if (drink === liquid) {
    console.log("panir opor nam jibon")
}
else {
    console.log("somudre pani ache ja khawa jay na"

    )
}
// milayte trim use korte hbe

if (drink.trim() === liquid.trim()) {
    console.log("panir opor nam jibon")
}
else {
    console.log("somudre pani ache ja khawa jay na"
    )
}