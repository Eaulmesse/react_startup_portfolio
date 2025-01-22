import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const OfferCards = ({ title, description, isOpen, handleOpen }) => {
    return (
        <div
            onClick={handleOpen}
            className={`${
                isOpen ? "h-auto" : "h-20 md:h-16 "
            } w-4/5 md:w-[45%] p-5 text-white rounded-lg shadow-lg mt-5 cursor-pointer bg-gradient-to-r from-violet-950 to-purple-900 overflow-hidden`}
        >
            {/* Titre avec l'icône */}
            <div className={`flex justify-between items-center text-purple-200 ${isOpen ? "h-fit" : "h-full"}`}>
                <p className="poppins-medium text-xl">{title}</p>
                <FontAwesomeIcon
                    icon={isOpen ? faChevronDown : faChevronRight}
                    className="text-lg"
                />
            </div>

            {/* Description */}
            <p className={`poppins-regular text-md my-4 w-[90%] transition-opacity duration-300 ${ isOpen ? "opacity-100 mt-4" : "opacity-0 mt-0"}`} >
                {description}
            </p>
        </div>
    );
};

export default OfferCards;
