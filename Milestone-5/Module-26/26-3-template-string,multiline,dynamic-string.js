const firstName = 'Kamruzzaman';
const lastName = "Shuvo";

// const aboutMe = 'asdasf 
// asdfasf
// asdfasf;
// asdfasdf'

const aboutMe = `My name is ${firstName}`;
const giveMe = `give me money ${(10 + 20) * 2 + 500}`
console.log(giveMe);
const fullName = firstName + ' ' + lastName;
const fullName2 = `${firstName} ${lastName}`;

function getCardHTML(name, description, price) {
    const div = `
        <div class="card">
            <h2>${name.toUpperCase()} Borolox</h2>
            <p>Price: $ ${price}</p>
            <p>${description}</p>
        </div>
    `;

    console.log(div);
}

getCardHTML('iPhone 12', 'This is the latest iPhone model', 999.66,);

// task from chatgpt

const userName = "Borolox Himel";
const userAge = 19;
console.log(` Hello ${userName} 'Next year you will be' ${userAge + 1} 'years old'`);

function createProductCard(productName, price, description) {
    const himel =`
    <div class="product-card">
  <h3> ${productName.toUpperCase()} </h3>
  <p>Price: $ ${price} </p>
  <p>Description: ${description} </p>
</div>
`;
console.log(himel);
}
createProductCard('Football', 1000, "Hello Himel's team");


const num1 = 12;
const num2 = 52;
console.log(`The sum of ${num1} and ${num2} os ${num1 + num2} 
The product of ${num1} and ${num2} is ${num1 * num2}`);