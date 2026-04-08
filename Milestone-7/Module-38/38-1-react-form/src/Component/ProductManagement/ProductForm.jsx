import React, { useState } from 'react';

const ProductForm = ({handleAddProdunct}) => {

    const [error, setError] = useState('')

    const handleProductSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        // validation
        if(name.length === 0){
            setError('Please provide a product Name')
        }
        else if(price.length ===0){
            setError('Please provide a price');
            return;
        }
        else if(price < 0){
            setError('Please can not be negative');
            return;
        }
        else{
            setError('');
        }

        // console.log(name, price, quantity);

        const newProduct = {
            name,
            price,
            quantity
        }
        console.log(newProduct)

        
            handleAddProdunct(newProduct);
        
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
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;