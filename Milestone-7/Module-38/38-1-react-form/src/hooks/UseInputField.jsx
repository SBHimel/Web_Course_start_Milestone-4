import React, { useState } from 'react';

const UseInputField = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue);
    
    const handlefieldOnChange = e =>{
        setFieldValue(e.target.value);
    }
    
    return[fieldValue, handlefieldOnChange]
};

export default UseInputField;