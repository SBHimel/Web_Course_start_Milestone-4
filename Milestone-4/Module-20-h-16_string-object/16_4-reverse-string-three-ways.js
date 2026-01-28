const sentence = "I am learning Web Dev";
// reverse kora    veD bew gninrael ma I

let reverse = ""
for( const letter of sentence){
    // console.log(letter);
    reverse=letter + reverse;
}
console.log(reverse);



let rev = ''
for(let i = 0; i<sentence.length; i++){
    console.log(i);
    console.log(sentence[i]);
    const letterr = sentence[i];
    rev = letterr + rev;
}
console.log(rev);


// shortcut

let word = "Bangladesh";

let rever = word.split("").reverse().join("");

console.log(rever);
// hsedalgnaB




//  শুধু এই লাইনটা মনে রাখো:

// str.split("").reverse().join("")

