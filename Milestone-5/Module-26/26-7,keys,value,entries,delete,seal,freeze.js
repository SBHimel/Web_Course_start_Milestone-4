const king = { name: 'Mufasa', age: 55, kingdom: 'Pride Lands' };
const keys = Object.keys(king);
console.log(keys);
const values = Object.values(king)
console.log(values);
const entries = Object.entries(king);
console.log(entries);

const king2 = { name: 'Mufasa', age: 55, kingdom: 'Pride Lands' };
Object.freeze(king2);
Object.seal(king2);
delete king2.age;
console.log(king2)

delete king2.kingdom;
king2.queen = 'Sarabi';
king2.name = 'King Simba';
console.log(king2);