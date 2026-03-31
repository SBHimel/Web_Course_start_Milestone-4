import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFetures = ({feature}) => {
    return (
        <p className='flex mt-4'><CircleCheckBig className='mr-2 text-[#8d00f9]'></CircleCheckBig>{feature}</p>
    );
};

export default PricingFetures;