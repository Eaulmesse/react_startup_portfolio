import React from 'react';
import OfferButton from '../misc/OfferButton';
import AvailableButton from '../misc/AvailableButton';
import { motion } from "framer-motion";

const Header = () => {

    return (
        <motion.header
            id='home'
            className='w-[90%] m-auto flex flex-col items-center z-50 mt-5'  
        >
            {/* Le reste de votre code reste inchangé */}
        
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} viewport={{ once: true}} transition={{ delay: 0.8 ,duration: 1 }} className='mt-5'>
                <AvailableButton />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} viewport={{ once: true}} transition={{ delay: 1, duration: 0.5 }} ease={"easeIn"} className='text-center text-[22px] sm:text-4xl md:text-5xl lg:text-7xl poppins-bold text-white mt-5'>Développeur <br /> 
            <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Front-End</span> pour <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Startups</span></motion.h1>

            <motion.p initial={{ opacity: 0, scale: 0.8  }} animate={{ opacity: 1, scale: 1 }} viewport={{ once: true}} transition={{  delay: 1, duration: 0.5 }} ease={"easeIn"} className='text-sm sm:text-lg md:text-xl lg:text-3xl  poppins-bold text-white'>MVP <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>rapides</span> et interfaces <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>engageantes</span>.</motion.p>

            <motion.p initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} viewport={{ once: true}} transition={{ delay: 1, duration: 0.5 }} ease={"easeIn"} className='poppins-regular text-center m-auto text-sm sm:text-md md:text-lg text-neutral-300 mt-5'>Je conçois des applications intuitives, réactives et optimisées pour offrir une expérience utilisateur fluide, tout en respectant les délais serrés des startups ambitieuses.</motion.p>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} viewport={{ once: true}} transition={{ delay: 1, duration: 0.5 }} ease={"easeIn"} className='flex justify-center h-fit'>
                <OfferButton label={"Mon Offre"}/>
            </motion.div>
            
        </motion.header>
    );
};

export default Header;