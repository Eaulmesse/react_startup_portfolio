import React from 'react';
import { motion } from 'framer-motion';

import Me from './Me';
import Experience from './Experience';



const Introduction = () => {
    return (
        <div id='me' className="mt-10 w-4/5 m-auto">
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} viewport={{ once: true}} transition={{ delay: 1.5 ,duration: 1 }} className='text-white poppins-bold text-xl text-center lg:text-left'>Je me <span className='text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Présente</span></motion.h2>

            <div  className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-5 mt-2">
                <Me />
                <Experience />
            </div>
            
        </div>
    );
};

export default Introduction;