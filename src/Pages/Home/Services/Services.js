import React from 'react';
import logoDesign from '../../../assets/images/logo-design.png';
import reports from '../../../assets/images/reports (1).png';
import ebooks from '../../../assets/images/ebooks.png';
import socialMedia from '../../../assets/images/social-media.png';
import illustrations from '../../../assets/images/illustrations.png';
import infographics from '../../../assets/images/infographics.png';
import email from '../../../assets/images/email.png';
import printed from '../../../assets/images/printed.png';
import presentations from '../../../assets/images/presentations.png';
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
            <div className='flex flex-row flex-wrap justify-center gap-[30px]'>
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