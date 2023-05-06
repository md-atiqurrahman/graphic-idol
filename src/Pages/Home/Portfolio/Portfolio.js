import React from "react";
import img1 from '../../../assets/images/Portfolio/1.png';
import img2 from '../../../assets/images/Portfolio/2.jpg';
import img3 from '../../../assets/images/Portfolio/3.jpg';
import img4 from '../../../assets/images/Portfolio/4.png';
import img5 from '../../../assets/images/Portfolio/5.jpg';
import img6 from '../../../assets/images/Portfolio/6.png';
import ImageFlipBox from "../ImageFlipBox/ImageFlipBox";
import './Portfolio.css';


const Portfolio = () => {

    const images = [
        {
            id: 1,
            image: img1
        },
        {
            id: 2,
            image: img2
        },
        {
            id: 3,
            image: img3
        },
        {
            id: 4,
            image: img4
        },
        {
            id: 5,
            image: img5
        },
        {
            id: 6,
            image: img6
        }
    ]

    return (
        <div className="text-center mt-[115px]">
            <h1 className="text-black text-[46px] font-bold leading-[70px]">Portfolio</h1>
            <div className="text-[#3a3a3a] text-[22px] font-normal leading-[32px] mb-[84px]">
                <p>We don't promise quality without proof. Browse our work</p>
                <p>below to get an idea of what we can do.</p>
            </div>
            <div className="mb-[55px] grid grid-cols-[350px] md:grid-cols-[350px_350px] lg:grid-cols-[350px_350px_350px] justify-center gap-[30px]">
                  {
                    images.map(image => <ImageFlipBox
                    key={image.id}
                    image={image.image}
                    >
                    </ImageFlipBox>)
                  }
            </div>
            <div className='w-[203px] px-[44px] py-[20px] bg-secondary mx-auto rounded-[50px] text-white text-[18px] font-semibold cursor-pointer hover:bg-primary'>View Gallery</div>
        </div>
    )
}

export default Portfolio;