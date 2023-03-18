import React from 'react';

const ImageFlipBox = ({image}) => {
    return (
        <div className="relative">
            <img className="w-[350px] h-[400px]" src={image} alt="" />
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                    </div>
                    <div className="flip-box-back">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageFlipBox;