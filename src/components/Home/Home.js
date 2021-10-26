import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import LogoSlide from '../LogoSlide/LogoSlide';
import TopBanner from '../TopBanner/TopBanner';
import Volunteer from '../Volunteer/Volunteer';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <About></About>
            <Volunteer></Volunteer>
            <LogoSlide></LogoSlide>
            <Blog></Blog>
        </div>
    );
};

export default Home;