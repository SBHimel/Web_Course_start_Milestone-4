const nayok = {
    name: "Sakib Khan",
    id: 121,
    address: "move cinema",
    isSingle: true,
    friends: ["Apu", "Salman", "aamir"],
    movies: [{ name: "no.1", year: 2015 }],
    act: function(){
        console.log('acting like Sakib khan')
    },
    car: {
        brand: "tesla",
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: "Elon Musk",
            country: "USA",
        }
    }
}

console.log(nayok.movies);
nayok.act();


const products = [
    {name: "phone", price: 2000},
    {name: "laptop", price: 32000},
]

console.log (products[0]);
console.log (products[1]);

const products2 = {
    '0': 15,
    '1': 56,
    '2': 86,
}
console.log (products2[0]);



//----------------arguments-----------------

function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);   
}
add(12,13,45,89,78);

function test(a, b){
    console.log(arguments);
}
test(10, 20, 30, 40);


