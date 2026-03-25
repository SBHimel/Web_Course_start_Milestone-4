const addNumberTols = () => {
    const number = Math.ceil(Math.random() * 100)
    console.log(number);
    localStorage.setItem('number', number)
}

const setObjectToLS = () =>{
    const customer = {name: 'rohim kahlu', product: 3, price: 75};
    const customerJSON = JSON.stringify(customer)
    localStorage.setItem('customer' , customerJSON);
    
}

const readObjectFromLS =() =>{
    const customerJSON = localStorage.getItem('customer')
    const customer = JSON.parse(customerJSON)
    console.log( customer.name)
}

const getNumberFromLS = () => {
    const number = localStorage.getItem('number');
    console.log('from savedlacal storage', number)
}