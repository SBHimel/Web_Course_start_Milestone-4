
const mobile = {
    brand: 'samsung',
    price: 25000,
    colore: 'black',
    camera: '12mp',
    isNew: true,
}
// for of : array  er moddhe calai
// for in : onject  er moddhe calai

for(const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop])
}
// another ways

const keys = Object.keys(mobile);
console.log(keys);
for(const key of keys){
    console.log(key, ':', mobile[key])
}

//  Object declare another ways
const pen = { brand: "econo", price: 10, colore: "bkack"}
const pencil = new Object()
console.log(pencil)
const rubber = Object.create({})
console.log(rubber)