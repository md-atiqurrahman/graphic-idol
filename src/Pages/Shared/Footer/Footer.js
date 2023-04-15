import React from 'react';
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='flex justify-between flex-col lg:flex-row items-center bg-primary lg:px-[120px] py-[15px] lg:py-[35px] absolute bottom-0 w-full'>
            <h6 className='text-white text-[16px] font-normal leading-[24px]
             mb-[20px] lg:mb-0'>© {year} Graphic Idol All Rights Reserved</h6>
            <div className='flex items-center gap-[24px] text-[#B0B0B0] font-normal leading-[1]'>
                <span className='hover:text-secondary cursor-pointer'>
                    <Link target='_blank' to='https://www.behance.net/graphicidol/'> <FaBehance></FaBehance>
                    </Link>
                </span>
                <span className='hover:text-secondary cursor-pointer'>
                    <Link target='_blank' to='https://www.facebook.com/graphicidol/'><FaFacebookF></FaFacebookF></Link>
                </span>
                <span className='hover:text-secondary cursor-pointer'>
                    <Link target='_blank' to='https://www.linkedin.com/in/graphicidol/'><FaLinkedinIn></FaLinkedinIn></Link>
                </span>
                <span className='hover:text-secondary cursor-pointer'>
                    <Link target='_blank' to='https://twitter.com/graphicidol'>
                        <FaTwitter></FaTwitter>
                    </Link>
                </span>
                <span className='hover:text-secondary cursor-pointer'>
                    <Link target='_blank' to='https://www.instagram.com/graphicidol/'>
                        <FaInstagram></FaInstagram>
                    </Link>
                </span>
            </div>
        </footer>
    );
};

export default Footer;