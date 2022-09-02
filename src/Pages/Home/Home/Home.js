import React from 'react';
import Navigation from '../../Shared/Navigation';
import Banner from '../Banner/Banner';
import FearuredGear from '../FeaturedGear/FearuredGear';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <FearuredGear/>
        </div>
    );
};

export default Home;