import React from 'react';

const Banner = () => {
    return (
            <div className="min-h-[780px] bg-[url('/src/assets/images/cup-coffee-table.jpg')] bg-fixed bg-center bg-no-repeat bg-cover 
             -mt-[74px] text-center">
            <div className='bg-primary absolute top-[73px] opacity-90 pt-[115px] px-[244px] pb-[187px]'>
                <h3 className='text-white text-[27px] font-extralight leading-[70px]'>
                    Save time and money by outsourcing your graphic design needs
                </h3>
                <div className=' text-white text-[56px] font-bold leading-[66px]
             pt-[23px] pb-[46px]'>
                    <h2 >Attractive, High-Quality, and</h2>
                    <h2 >Affordable Graphic Design</h2>
                    <h2 >For Small Marketing Agencies</h2>
                </div>
                <div className='w-[203px] px-[44px] py-[20px] bg-secondary mx-auto rounded-[50px] text-white text-[18px] font-semibold cursor-pointer'>Get In Touch</div>
            </div>
        </div>
    );
};

export default Banner;