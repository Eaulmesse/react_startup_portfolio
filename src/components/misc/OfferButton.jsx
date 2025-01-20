import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

const OfferButton = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="px-5 w-44 poppins-regular m-auto mt-10 bg-purple-600 text-lg py-2 rounded-full flex justify-between items-center shadow shadow-purple-600 hover:shadow-purple-800 text-purple-100">
            <FontAwesomeIcon icon={faMeteor} />
            {label}
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    );
};

export default OfferButton;