import React from 'react';

const ProductForm = () => {

    const handleProductSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        // console.log(name, price, quantity);

        const newProduct = {
            name,
            price,
            quantity
        }
        console.log(newProduct)
    }

    return (
        <div>
            <form onSubmit={handleProductSubmit}>
                <h3>Add a Product</h3>
                <input type="text" name='name' placeholder='Product Name'/>
                <br />
                <input type="text" name='price' placeholder='Product price'/>
                <br />
                <input type="text" name='quantity' placeholder='Product quantity'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;