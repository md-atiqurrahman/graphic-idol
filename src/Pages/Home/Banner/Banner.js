import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="min-h-screen bg-[url('/src/assets/images/cup-coffee-table.jpg')] bg-scroll bg-center bg-no-repeat bg-cover  -mt-[74px] text-center">
                <div className=''>
                    <h3 className='text-black text-[27px] font-extralight leading-[70px]
             pt-[189px]'>Save time and money by outsourcing your graphic design needs</h3>
                    <div className='text-black text-[56px] font-bold leading-[66px]
             pt-[23px]'>
                        <h2 >Attractive, High-Quality, and</h2>
                        <h2 >Affordable Graphic Design</h2>
                        <h2 >For Small Marketing Agencies</h2>
                    </div>
                </div>
                <div className='btn btn-secondary rounded-xl'>Get In Touch</div>
            </div>
        </div>
    );
};

export default Banner;