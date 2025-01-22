import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";

const RecommendationCards = ({ name, job, text }) => {

    return (
        <div className="min-w-full md:w-[45%] lg:w-[30%] md:min-w-0 p-5 bg-gradient-to-r from-violet-950 to-purple-900 rounded-lg shadow-lg overflow-hidden relative mt-5">
            <div className="absolute right-5">
                <FontAwesomeIcon icon={faComputerMouse} className="text-white text-xl" />
            </div>
            <p className="poppins-medium text-white text-xl">{name}</p>
            <p className="poppins-regular text-white text-lg">{job}</p>
            <p className="poppins-regular text-white mt-5 overflow-hidden">{text}</p>
        </div>
    );
};

export default RecommendationCards;