// rsc diye enter marlei react extension pack er karone auto componet creat hobe

import React, { use, useState } from 'react';
import Country from '../../Country/Country';
import './Countries.css'

const Countries = ({countrisPromise}) => {
    // state declare 
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisisitedCountries = (country) =>{
        console.log('handle visited country clicked', country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(countrisPromise);
    const countries = countriesData.countries;
    // console.log(countris);
    return (
        <div>
            <h1>In the Countrie: {countries.length}</h1>
            <h3>Total Country Visisted: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div  className='countries'>
                {
                countries.map(country =>
                    <Country
                    key={country.cca3.cca3}
                     country = {country}

                     handleVisisitedCountries = {handleVisisitedCountries}
                     ></Country>

                )
            }
            </div>
        </div>
    );
};

export default Countries;

/* function Countries(){
    return(
        <div>

        </div>
    )
} */