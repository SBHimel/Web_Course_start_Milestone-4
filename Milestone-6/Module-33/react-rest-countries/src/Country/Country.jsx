import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisisitedCountries}) => {
    // console.log(handleVisisitedCountries);
    // console.log(country)
    // console.log(country.flags.flags.png)
    // console.log(country.population.population)
    const [visited, setVisited] = useState(false);
    console.log(country.area.area)

    const handleVisisited = () =>{
        // basic way
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        
        // 2nd way  Ternary operator diye
        // setVisited(visited? false : true);

        // 3rd way toggle kora ekbar click korle ekta arekbar click korle arekta
        setVisited(!visited)
        handleVisisitedCountries(country);
    }

    return (
        // <div className='{`country border-lg text-center ${visited ? 'country-visited'}`}'></div>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            {/* Ternary operator diye conditional rendering */}
            <p>Area: {country.area.area} {
            country.area.area > 300000 ? "Big Country" : 'Small country'
            }</p>

            <button onClick={handleVisisited} className='btn'>
                {visited ? 'Visited' : 'Not Visited' }
            </button>

            <button className='btn'>Add Visited Flag</button>
        </div>
    );
};

export default Country;

/* 
* 1. inline css (style object)
*
* */