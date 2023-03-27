import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const Banner = () => {
    return (
            <div className="min-h-[780px] bg-[url('/src/assets/images/Banner/cup-coffee-table.jpg')] bg-fixed bg-center bg-no-repeat bg-cover 
            text-center">
            <Navbar></Navbar>
            <div className='bg-primary opacity-90 pt-[116px]  pb-[187px]'>
                <h3 className='text-white text-[27px] font-extralight leading-[70px]'>
                Make your graphic design projects more efficient by outsourcing
                </h3>
                <div className=' text-white text-[56px] font-bold leading-[66px]
             pt-[23px] pb-[46px]'>
                    <h2 >High-Quality, Affordable, and </h2>
                    <h2 >Attractive Graphic Design</h2>
                    <h2>For Small Marketing Agencies</h2>
                </div>
                <div className='w-[203px] px-[44px] py-[20px] bg-secondary mx-auto rounded-[50px] text-white text-[18px] font-semibold cursor-pointer'>Get In Touch</div>
            </div>
        </div>
    );
};

export default Banner;