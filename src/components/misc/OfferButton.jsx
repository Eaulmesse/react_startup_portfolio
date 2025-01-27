import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

const OfferButton = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="px-5 w-40 poppins-regular mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg py-2 rounded-full flex justify-between items-center text-white shadow-[0_0px_50px] shadow-violet-600/20">
            {label}
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    );
};

export default OfferButton;