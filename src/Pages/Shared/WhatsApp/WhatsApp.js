import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsApp = () => {

    return (
        <div className='fixed right-0 bottom-0 cursor-pointer'>
            <FontAwesomeIcon className='w-[60px] h-[60px] text-green-500' icon={faSquareWhatsapp} />
        </div>
    );
};

export default WhatsApp;