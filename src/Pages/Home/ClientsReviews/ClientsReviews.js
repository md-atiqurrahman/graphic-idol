import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import {  IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import quatation from '../../../assets/icons/quote.svg';

const ClientsReviews = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const handleNext = () => {
        setCurrentReview(currentReview === reviews.length - 1 ? 0 : currentReview + 1);
    };

    const handlePrev = () => {
        setCurrentReview(currentReview === 0 ? reviews.length - 1 : currentReview - 1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentReview, handleNext]);

    const reviews = [
        {
            id: 1,
            text: "Amazing designer! Exceptional service, high-quality work!! I will be coming back for future work!",
            name: "John Doe",
            occupation: "Web Developer"
        },
        {
            id: 2,
            text: "I had a great experience working with Atik. He was very patient as he fulfilled my revision requests. Highly recommended!",
            name: "Jane Smith",
            occupation: "Content Creator"
        },
        {
            id: 3,
            text: "Very good work, Ive used his services before for some basic leaflet designs which worked very well. I would recommend!",
            name: "Mike Johnson",
            occupation: "Marketing Manager"
        }
    ];

    return (
        <div className='text-center mb-[185px]'>
            <h1 className="text-black text-[46px] font-bold leading-[70px] mb-[50px]">What They Say About Graphic Idol</h1>
            <div className="flex flex-col items-center">
                <div className="flex items-center">
                    <button onClick={handlePrev} className="w-[38px] h-[38px] 
                    border border-[#676767] rounded-[50px] text-lg text-[#676767] hover:text-gray-800 focus:outline-none">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className="relative mx-4">
                        <div className="absolute top-0 bottom-0 left-0 right-0">
                            <div className="bg-gradient-to-b from-transparent to-white h-4/5"></div>
                        </div>
                        <div className="w-[680px] h-[310px] px-8 py-6 bg-white rounded-lg shadow-lg relative overflow-hidden flex flex-col justify-center z-10">
                            <img className='w-[128px] absolute top-0' src={quatation} alt="" />
                            <div className="text-[#676767] text-[18px] font-medium leading-[27px] mb-4">{reviews[currentReview].text}</div>
                            <div className="text-[#FF4040] text-[20px] font-medium leading-[30px]">{reviews[currentReview].name}</div>
                            <div className="text-gray-600 text-sm">{reviews[currentReview].occupation}</div>
                        </div>
                        <div className="w-[640px] h-[310px] px-8 py-6 bg-white rounded-lg shadow-lg absolute top-[20px] z-[1] overflow-hidden ml-[20px]"></div>
                        <div className="w-[600px] h-[310px] px-8 py-6 bg-white rounded-lg shadow-lg absolute top-[40px] z-0 overflow-hidden ml-[40px]"></div>
                    </div>
                    <button onClick={handleNext} className="w-[38px] h-[38px] 
                    border border-[#676767] rounded-[50px] text-lg text-[#676767] hover:text-gray-800 focus:outline-none">
                    <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClientsReviews;
