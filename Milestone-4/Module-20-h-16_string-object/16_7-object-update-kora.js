const person = {
    name : "sodor uddin",
    age : 25,
    profession : "diveloper",
    salary : 25000,
    married : true,
    "fav places" : ['bandorban', "saintmartin", "kuakata"]
}
person.salary = 30000;
person['age'] = 26;
person['fav places'] = ['bangaluru','bangladesh']
console.log(person);

// ektu fun way te change korte

const propName = 'profession';
person[propName] = 'sigalala developpppppper'
console.log(person)