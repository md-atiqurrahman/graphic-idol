import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ image, cardTitle }) => {
    return (
        <div className="card justify-center items-center w-[350px] h-[328px] bg-base-100 shadow-cxl 
        p-[25px]">
            <figure className="mt-[34px]">
                <img src={image} alt="logo design" />
            </figure>
            <div className="text-center text-black">
                <h2 className="text-[21px] font-semibold leading-[78px] mt-[25px] mb-[5px]">{cardTitle}</h2>
                <div className='flex justify-center items-center cursor-pointer'>
                    <p className='text-[16px] font-medium leading-[26px] 
                    mr-[10px] hover:text-secondary'>Learn More </p>
                    <span className='hover:text-secondary'><BsArrowRight></BsArrowRight></span>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;