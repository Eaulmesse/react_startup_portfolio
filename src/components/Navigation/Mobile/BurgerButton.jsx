import React from 'react';
import { motion } from 'framer-motion';

const BurgerButton = ({ toggleMenu, onClick }) => {
    return (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} viewport={{ once: true}} transition={{ duration: 2 }} className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center bg-transparent border-none cursor-pointer space-y-1.5" onClick={onClick}>

            <div className={`w-full h-0.5 bg-slate-100 transition-transform duration-300 shadow shadow-white shadow-sm ${toggleMenu ? 'transform -rotate-45 translate-y-2' : ''}`}></div>

            <div className={`w-full h-0.5 bg-slate-100 transition-transform duration-300 shadow shadow-white shadow-sm ${toggleMenu ? 'transform rotate-45 ' : ''}`} ></div>
        </motion.button>
    );
};

export default BurgerButton;