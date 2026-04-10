import React from 'react';
import Banner from '../../components/homepage/Banner';
import Stats from '../../components/homepage/Stats';
import TrendingApps from '../../components/homepage/TrendingApps';
import { useLoaderData } from 'react-router';

/* er code gula main.jsx e apply hoyeche */

const Homepage = () => {


    return (
        <>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </>
    );
};

export default Homepage;