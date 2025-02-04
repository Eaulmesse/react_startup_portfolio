import React from 'react';
import XLogo from "../../assets/svg/x-logo.png"
import Malt from "../../assets/svg/malt.svg"
import Linkedin from "../../assets/svg/linkedin.svg"
import { motion } from "framer-motion";

const Network = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, translateY: "50px" }} 
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{ delay: 0.5, duration: 1 }}  
            viewport={{ once: true }} 
            className='w-full lg:w-3/5 rounded-2xl bg-neutral-900 flex flex-col justify-between'>
            
            <div className=''>
                <p className='text-white poppins-bold text-3xl p-5'>Je suis aussi sur les <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>réseaux</span></p>

                <p className='text-white poppins-regular px-5 text-neutral-400'>Je suis actif sur X pour y poster mes actualités, tips et avancées personnelles. N’hésitez pas à me rejoindre, ou même me contacter. Je vous laisse aussi un lien vers mon profil Linkedin et un autre vers mon Malt dans le cas ou vous seriez interessé(e) par mon travail !</p>
            </div>
            

            <div className='p-5 flex items-center space-x-2 w-full justify-evenly  lg:justify-end space-x-5'>
                
                <motion.a whileHover={{ scale: 1.2 }} href="https://www.malt.fr/profile/theoguerin" className='w-12 '>
                    <img src={Malt} alt="Mon compte Malt" />
                </motion.a >
                
                <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/guerin-theo/" className='w-10' >
                    <img src={Linkedin} alt="Mon compte Linkedin" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="https://x.com/Eaulmesse" className='w-12'>
                    <img src={XLogo} alt="Mon compte X" />
                </motion.a>
                
            </div>
            
        </motion.div>
    );
};

export default Network;