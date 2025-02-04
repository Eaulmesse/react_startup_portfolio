import React from 'react';
import  AvailableButton from "../misc/AvailableButton";
import { motion } from "framer-motion";

const Disponibility = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, translateY: "50px" }} 
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{ delay: 0.25, duration: 1 }} 
            viewport={{ once: true }}  
            className='w-full h-max lg:w-2/5 rounded-2xl bg-neutral-900'>
            

            <p className='text-white poppins-bold text-3xl p-5'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Disponible</span> pour vos projets<span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'> web</span></p>

            
            

            <p className='text-white poppins-regular p-5 text-neutral-400'>Envoyez moi un mail en m’expliquant votre projet, nous pourrons en discuter lors d’une visio-conférence et mettre des choses en place pour améliorer votre image en ligne.</p>

           

            <div className='flex  items-center p-5 justify-center sm:justify-start'>
                <motion.p whileHover={{ marginLeft: "10px" , scale: 1.2, }} className='flex items-center text-white bg-neutral-800 poppins-regular p-5 h-12 rounded-full text-sm'>theo.guerin01120@gmail.com</motion.p>

            </div>
            
        </motion.div>
    );
};

export default Disponibility;