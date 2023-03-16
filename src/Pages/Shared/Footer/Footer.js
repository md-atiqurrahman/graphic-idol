import React from 'react';
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='flex justify-between items-center bg-primary px-[120px] py-[35px]'>
            <h6 className='text-white text-[16px] font-normal leading-[24px]'>© {year} Graphic Mart All Rights Reserved</h6>
            <div className='flex items-center gap-[24px] text-[#B0B0B0] font-normal leading-[1]'>
                <span className='hover:text-secondary cursor-pointer'>
                    <FaBehance></FaBehance>
                </span>
                <span className='hover:text-secondary cursor-pointer'>
                    <FaFacebookF></FaFacebookF>
                </span>
                <span className='hover:text-secondary cursor-pointer'>
                    <FaLinkedinIn></FaLinkedinIn>
                </span>
                <span className='hover:text-secondary cursor-pointer'>
                    <FaTwitter></FaTwitter>
                </span>
                <span className='hover:text-secondary cursor-pointer'>
                    <FaInstagram></FaInstagram>
                </span>
            </div>
        </div>
    );
};

export default Footer;