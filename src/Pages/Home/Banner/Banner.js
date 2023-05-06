import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const Banner = () => {
    return (
            <div className="max-h-[780px] bg-[url('/src/assets/images/Banner/cup-coffee-table.jpg')] bg-fixed bg-center bg-no-repeat bg-cover text-center">
            <Navbar></Navbar>
            <div className='bg-primary opacity-[.96] lg:opacity-90 pt-[180px] lg:pt-[116px] pb-[240px] lg:pb-[187px]'>
                <h3 className='text-white text-[18px] leading-[27px] lg:text-[27px] lg:leading-[70px] font-extralight mx-[10px] lg:mx-0'>
                Make your graphic design projects more efficient by outsourcing
                </h3>
                <div className=' text-white text-[22px] leading-[33px] lg:text-[56px] lg:leading-[66px] font-bold pt-[23px] pb-[46px] px-0 lg:px-[120px]'>
                    <h2>High-Quality, Affordable, and Attractive Graphic Design For Small Marketing Agencies</h2>

                </div>
                <div className='w-[203px] px-[44px] py-[20px] bg-secondary mx-auto rounded-[50px] text-white text-[18px] font-semibold cursor-pointer'>Get In Touch</div>
            </div>
        </div>
    );
};

export default Banner;