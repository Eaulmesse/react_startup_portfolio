import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Footer = () => {
    const handleClick = (e, href) => {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.footer 
        initial={{ opacity: 0, translateY: "50px" }} 
        whileInView={{ opacity: 1, translateY: "0px" }}
        transition={{ duration: 1 }}  
        viewport={{ once: true }}  
        className="flex flex-col items-center lg:flex-row text-white w-5/6 m-auto mt-5 pb-2">
            <p className='text-xl poppins-medium text-white drop-shadow-lg'>Théo Guerin.</p>

            <div className='hidden lg:flex lg:m-auto space-x-5 poppins-regular text-white text-md'>
                <Link to="#home" onClick={(e) => handleClick(e, "#home")}>accueil.</Link>
                <Link to="#me" onClick={(e) => handleClick(e, "#me")}>me.</Link>
                <Link to="#projects" onClick={(e) => handleClick(e, "#projects")}>projects.</Link>
                <Link to="#offer" onClick={(e) => handleClick(e, "#offer")}>offre.</Link>
                <Link to="#contact" onClick={(e) => handleClick(e, "#contact")}>contact.</Link>
            </div>

            <div>
                <p className='text-md poppins-medium text-white drop-shadow-lg'>theo.guerin01120@gmail.com</p>
            </div>
        </motion.footer>
    );
};

export default Footer;