import React from 'react';
import Banner from '../Banner/Banner';
import ClientsReviews from '../ClientsReviews/ClientsReviews';
import FeedbackVideo from '../FeedbackVideo/FeedbackVideo';
import OurSpeciality from '../OurSpeciality/OurSpeciality';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import ContactForm from '../ContactForm/ContactForm';
import WhatsApp from '../../Shared/WhatsApp/WhatsApp';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Portfolio></Portfolio>
            <FeedbackVideo></FeedbackVideo>
            <OurSpeciality></OurSpeciality>
            <ClientsReviews></ClientsReviews>
            <ContactForm></ContactForm>
            <WhatsApp></WhatsApp>
        </div>
    );
};

export default Home;