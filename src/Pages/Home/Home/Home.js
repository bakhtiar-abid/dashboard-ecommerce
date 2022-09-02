import React from 'react';
import Navigation from '../../Shared/Navigation';
import Adventure from '../Adventure/Adventure';
import Banner from '../Banner/Banner';
import FearuredGear from '../FeaturedGear/FearuredGear';
import RightGear from '../RightGear/RightGear';
import ZipperLess from '../ZipperLess/ZipperLess';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <FearuredGear/>
            <RightGear/>
            <ZipperLess/>
            <Adventure/>
        </div>
    );
};

export default Home;