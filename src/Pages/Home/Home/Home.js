import React from 'react';
import Banner from '../Banner/Banner';
import ClientsReviews from '../ClientsReviews/ClientsReviews';
import FeedbackVideo from '../FeedbackVideo/FeedbackVideo';
import OurSpeciality from '../OurSpeciality/OurSpeciality';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Contacts from '../../Home/Contacts/Contacts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Portfolio></Portfolio>
            <FeedbackVideo></FeedbackVideo>
            <OurSpeciality></OurSpeciality>
            <ClientsReviews></ClientsReviews>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;