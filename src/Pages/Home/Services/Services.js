import React from 'react';
import logoDesign from '../../../assets/images/Services/logo-design.png';
import reports from '../../../assets/images/Services/reports (1).png';
import ebooks from '../../../assets/images/Services/ebooks.png';
import socialMedia from '../../../assets/images/Services/social-media.png';
import illustrations from '../../../assets/images/Services/illustrations.png';
import infographics from '../../../assets/images/Services/infographics.png';
import email from '../../../assets/images/Services/email.png';
import printed from '../../../assets/images/Services/printed.png';
import presentations from '../../../assets/images/Services/presentations.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const cards = [
        {
            id: 1,
            image: logoDesign,
            cardTitle: 'Logo Design',
        },
        {
            id: 2,
            image: reports,
            cardTitle: 'Reports & Whitepapers',
        },
        {
            id: 3,
            image: ebooks,
            cardTitle: 'E-Books',
        },
        {
            id: 4,
            image: socialMedia,
            cardTitle: 'Social Media Imagery',
        },
        {
            id: 5,
            image: illustrations,
            cardTitle: 'Illustrations & Icons',
        },
        {
            id: 6,
            image: infographics,
            cardTitle: 'Infographics',
        },
        {
            id: 7,
            image: email,
            cardTitle: 'E-mail & Newsletter Design',
        },
        {
            id: 8,
            image: printed,
            cardTitle: 'Printed Marketing Materials',
        },
        {
            id: 9,
            image: presentations,
            cardTitle: 'Presentations & Pitch Decks',
        }
    ]

    return (
        <div className='text-center mt-[80px]'>
            <div className='mb-[93px]'>
                <h1 className='text-black text-[46px] font-bold leading-[70px]'>What We Do</h1>
                <div className='text-[#3a3a3a] text-[22px] font-normal leading-[32px]'>
                    <p>We partner with marketing agencies, provide a variety of</p>
                    <p>graphic design services for them, and do it at a</p>
                    <p>surprisingly low price.</p>
                </div>
            </div>
            <div className='grid grid-cols-[350px] md:grid-cols-[350px_350px] lg:grid-cols-[350px_350px_350px] justify-center gap-[30px]'>
                {
                    cards.map(card => <ServiceCard
                    key={card.id}
                    image={card.image}
                    cardTitle={card.cardTitle}
                    >
                    </ServiceCard>)
                }
            </div>
        </div>

    );
};

export default Services;