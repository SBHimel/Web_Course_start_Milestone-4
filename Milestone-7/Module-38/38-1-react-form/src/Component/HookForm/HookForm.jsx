import React from 'react';
import UseInputField from '../../hooks/UseInputField';

const HookForm = () => {
    const [name, nameOnChange] = UseInputField('');
    const [email, emailOnChange] = UseInputField('');
    const [password, passwordOnChange] = UseInputField('');



    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name, email, password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    defaultValue={name}
                    onChange={nameOnChange}
                    placeholder='Name'
                />
                <br />
                <input
                    type="email"
                    defaultValue={email}
                    onChange={emailOnChange}
                    name=""
                    id=""
                    placeholder='email address'
                     />
                    
                <br />
                <input 
                type="password" 
                defaultValue={password}
                onChange={passwordOnChange}
                name="" 
                id="" 
                placeholder='your password'
                />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;