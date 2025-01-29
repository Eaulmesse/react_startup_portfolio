import React from 'react';
import { motion } from "framer-motion";

const AvailableButton = () => {
    return (
        <button className="flex items-center justify-evenly w-32 h-12 rounded-full bg-neutral-900">
            <p className='poppins-regular available-font-color'>Available</p>
            <motion.div className='w-3 h-3 rounded-full available-button-color'></motion.div>
        </button>
    );
};

export default AvailableButton;