import React, { useState } from 'react';
import customerFeedback from '../../../assets/images/FeedbackVideo/customer feedback.jpg';
import { FaRegPlayCircle } from "react-icons/fa";
import './FeedbackVideo.css'

const FeedbackVideo = () => {
    const [playVideo, setPlayVideo] = useState(true);

    return (
        <div className='relative mt-[150px] mb-[140px]'>
            <div >
                <img className='w-full h-[500px]' src={customerFeedback} alt="" />
            </div>
            <div className='w-full h-[500px] absolute top-0 bg-primary opacity-[0.90] flex justify-center items-center'>
                <div className='relative inline-block'>
                    <div className="waves-block">
                        <div className="waves wave-1"></div>
                        <div className="waves wave-2"></div>
                        <div className="waves wave-3"></div>
                    </div>
                    <label htmlFor="video-modal">
                        <div onClick={() => setPlayVideo(true)} className='w-[102px] h-[102px] bg-white
                       rounded-[50%] flex justify-center items-center 
                        cursor-pointer'>
                            <span className='text-[46px] text-secondary'><FaRegPlayCircle></FaRegPlayCircle></span>
                        </div>
                    </label>
                </div>
            </div>
            <input type="checkbox" id="video-modal" className="modal-toggle" />
            <div className="modal">
                <div className="w-full h-full relative flex justify-center items-center">
                    <label onClick={() => setPlayVideo(false)} htmlFor="video-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <iframe width="900" height="500" src={playVideo? 'https://www.youtube.com/embed/SjgSCohAFSc': '0'} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default FeedbackVideo;