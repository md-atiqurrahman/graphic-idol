import React from "react";
import img1 from '../../../assets/images/Portfolio/1.jpg';
import './Portfolio.css';


const Portfolio = () => {
    return (
        <div className="text-center mt-[115px]">
            <h1 className="text-black text-[46px] font-bold leading-[70px]">Portfolio</h1>
            <div className="text-[#3a3a3a] text-[22px] font-normal leading-[32px] mb-[84px]">
                <p>We don't promise quality without proof. Browse our work</p>
                <p>below to get an idea of what we can do.</p>
            </div>
            <div className="mb-[55px] ml-[200px]">
                <div className="relative">
                    <img className="w-[350px] h-[400px]" src={img1} alt="" />
                    <div class="flip-box">
                        <div class="flip-box-inner">
                            <div class="flip-box-front">
                            </div>
                            <div class="flip-box-back">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;