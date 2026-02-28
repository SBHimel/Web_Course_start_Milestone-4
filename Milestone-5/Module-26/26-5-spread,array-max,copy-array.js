const max = Math.max(3, 5, 1, 8, 2, 58, 1);
// console.log(max);

const numbers = [3, 5, 1, 8, 2, 58, 1];
const max2 = Math.max(...numbers);
console.log(...numbers);
const params = [45, 12, 3];
function sum(x, y, z) {
    console.log(x, y, z);
    return x + y + z;
}
// const result = sum(...params)
// console.log(result);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);
const arr1 = [1, 2, 3];
const arr2 = [11, ...arr1, 66, 77];
arr2.push(4);
console.log(arr1);
console.log(arr2);

const person = { name: 'Alice', age: 30 };
// const person2 = person;
const person2 = {...person};
person.salary = 36000;
console.log(person);
console.log(person2);

// 🟢 Mega Task – Spread + Array Max + Copy + Object

const scores1 = [10, 20, 30];
const scores2 = [40, 50, 60];
const allScores = [...scores1, ...scores2]
console.log(allScores);

const maxScore = Math.max(... scores1, ...scores2);
console.log(maxScore)

const allScoresCopy = [...scores1, ...scores2, 100];
console.log(allScoresCopy)
/* Step 5 – Create object for student

Use arrow function → createStudent(name, scoresArray)

Return object: */

const createStudent = (name, scoresArray, maxScore) => ({
  name: name,
  scores: scoresArray,
  maxScore: maxScore
})
console.log(createStudent('Himel', allScores, 60
))