import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { Link } from 'react-router-dom';
import { motion, transform } from "framer-motion";
import { div } from 'framer-motion/client';

const OfferButton = ({ label }) => {

    const handleClick = (e, href) => {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div whileHover={{ scale: 1.05, rotate: -2 }}>
            <Link to={"#offer"} onClick={(e) => handleClick(e, "#offer")} className="px-5 w-40 poppins-regular mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg py-2 rounded-full flex justify-between items-center text-white shadow-[0_0px_50px] shadow-violet-600/20">
                {label}
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>

        </motion.div>

        
    );
};

export default OfferButton;