const computer = {
    brand: "lenovo",
    price: 35000,
    processor: "intel",
    hdd: "512gb",
    monitor: 'hp'
}
// shudhu matro key gula dekhte
const keys = Object.keys(computer);
console.log(keys);
// [ 'brand', 'price', 'processor', 'hdd' ]


// shudhu matro value gula dekhabe
const values = Object.values(computer);
console.log(values);
//[ 'lenovo', 35000, 'intel', '512gb', 'hp' ]


// nested  object

const college = {
    name: 'vnc',
    class: ['11', '12'],
    event: ['science fair', 'bijoy dibos', "21 Feb"],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            marit: 'top'
        }
    }
}
console.log(college)
console.log(college.unique.color);
console.log(college.unique.result);
console.log(college.unique.result.marit);
// change korte caile
college.unique.result.marit = 'top top top most'
console.log(college.unique.result.marit);

// Array theke change korte caile

college.class[1] = '16'
console.log(college.class[1])

// kono property delete korte caile

delete college.event;
console.log(college);