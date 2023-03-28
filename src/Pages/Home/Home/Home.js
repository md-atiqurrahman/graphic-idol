import React from 'react';
import Banner from '../Banner/Banner';
import FeedbackVideo from '../FeedbackVideo/FeedbackVideo';
import OurSpeciality from '../OurSpeciality/OurSpeciality';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Portfolio></Portfolio>
            <FeedbackVideo></FeedbackVideo>
            <OurSpeciality></OurSpeciality>
        </div>
    );
};

export default Home;