import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({model, carts, setCarts}) => {
    
    const [isSubscribe, setIsSubscribed] = useState(false)

    const handleSubsSciption = () => {
        setIsSubscribed(true)

        const isFound = carts.find(item => item.id === model.id)

        if(isFound){
            toast.error("Item already in cart!")
            return
        }

        setCarts([...carts, model])

        toast.success("Item added to cart")

    }

    return (
        <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-100 '>

            <div className='flex justify-center bg-zinc-200'>
                <img className='  w-40 h-40 object-contain' src={model.image} alt="" />
            </div>

            <div className='p-4 space-y-5'>
                <h2 className='text-2xl font-bold'>{model.title}</h2>

                <p>{model.description}</p>

                <div className='text-2xl font-bold'>${model.price}/month
                </div>

                <button onClick={handleSubsSciption} className='btn w-full bg-red-500
                         text-white rounded-lg mt-5'>{isSubscribe ? "Subscribed" : "Subscribe Now"}</button>


            </div>
        </div>
    );
};

export default ModelCard;