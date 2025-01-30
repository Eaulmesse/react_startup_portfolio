import React from 'react';
import { motion } from 'framer-motion'; 

const ExperienceLine = ({ title, duration, animDelay }) => {
    return (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: animDelay, duration: 0.5 }} className='w-full flex justify-between items-center relative'>
            <div className='absolute left-0  w-5 h-5 bg-purple-500 rounded-full shadow-[0_0px_20px] shadow-violet-500'></div>
            
            <div className='ml-10'>
                <div>
                    <p className='text-white poppins-semibold text-[13px]'>
                    {title}
                </p>
                </div>
                

                <p className='text-gray-300 poppins-semibold text-[12px]'>{duration}</p>
            </div>
        </motion.div>
    );
};

export default ExperienceLine;