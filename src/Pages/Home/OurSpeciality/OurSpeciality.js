import React from 'react';
import img1 from '../../../assets/images/OurSpeciality/communication.png';
import img2 from '../../../assets/images/OurSpeciality/quality.png';
import img3 from '../../../assets/images/OurSpeciality/result.png';

const OurSpeciality = () => {
    return (
        <div className='text-center mb-[154px]'>
            <h1 className="text-black text-[46px] font-bold leading-[70px] mb-[51px]">
                Why Our Clients Keep
                <br />
                Coming Back
            </h1>
            <div className='flex justify-center items-center gap-[30px] flex-wrap'>
                <div className="card w-[350px] h-[450px] bg-[#1e45c7] shadow-xl text-white rounded-[5px]">
                    <div className='flex justify-center items-center mt-[30px]'>
                        <img src={img1} alt="Communication" className="rounded-xl" />
                    </div>
                    <div className=" items-center text-center -mt-[14px] px-[40px]">
                        <h2 className="text-[22px] font-semibold leading-[48px] 
                    mb-[10px]">Communication</h2>
                        <p className='text-[20px] font-normal leading-[30px]'>We talk to you throughout the design process, including understanding what you want, keeping you updated, and revising if necessary.</p>
                    </div>
                </div>
                <div className="card w-[350px] h-[450px] bg-gradient-to-b from-[#fe436b] to-[#fc7860] shadow-xl text-white rounded-[5px]">
                    <div className='flex justify-center items-center mt-[30px]'>
                        <img src={img2} alt="Communication" className="rounded-xl" />
                    </div>
                    <div className=" items-center text-center -mt-[14px] px-[40px]">
                        <h2 className="text-[22px] font-semibold leading-[48px] 
                    mb-[10px]">Quality</h2>
                        <p className='text-[20px] font-normal leading-[30px]'>Our clients love the clean designs that we come up with. Even better, their clients do too, which can lead to years of repeat business.</p>
                    </div>
                </div>
                <div className="card w-[350px] h-[450px] bg-[#7457f3] shadow-xl text-white rounded-[5px]">
                    <div className='flex justify-center items-center mt-[30px]'>
                        <img src={img3} alt="Communication" className="rounded-xl" />
                    </div>
                    <div className=" items-center text-center -mt-[14px] px-[40px]">
                        <h2 className="text-[22px] font-semibold leading-[48px] 
                    mb-[10px]">Results</h2>
                        <p className='text-[20px] font-normal leading-[30px]'>Ultimately, the most important thing is getting results. We make it happen by lowering your expenses and workload.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSpeciality;