import React, { useState } from 'react';
import { motion } from 'framer-motion';

import NavLinks from './NavLinks';
import BurgerButton from './Mobile/BurgerButton';
import BurgerMenu from './Mobile/BurgerMenu';





const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    

    const handleClick = () => {
        setToggleMenu(!toggleMenu);
        console.log(toggleMenu);
        
    }

    return (
        <div className='relative sticky'>
            <nav className="flex justify-between items-center w-4/5 rounded-[25px] py-2  mt-5 mx-auto">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true}} transition={{ delay: 0.5, duration: 1 }} ease={"easeIn"} className='text-xl poppins-medium text-white drop-shadow-lg  top-5 lg:absolute'>Théo Guerin.</motion.p>
                
                <motion.div initial={{ "translateY": "-50px", opacity: 0 }} animate={{ "translateY": "0px", opacity: 1}} viewport={{ once: true}} transition={{ duration: 0.6 }} ease={"EaseIn"} className='lg:flex lg:m-auto hidden bg-zinc-900 py-1 px-2 rounded-[25px]'>
                    <NavLinks href={"#home"} text={"accueil."}/>
                    <NavLinks href={"#me"} text={"me."}/>
                    <NavLinks href={"#projects"} text={"projects."}/>
                    <NavLinks href={"#offer"} text={'offre.'}/>
                    <NavLinks href={"#contact"} text={'contact.'}/>
                </motion.div>
                
                <div className='z-50'>
                    <BurgerButton toggleMenu={toggleMenu} onClick={handleClick}/>
                </div>
            </nav>

            
            <BurgerMenu toggleMenu={toggleMenu}/>
            
            
            
            

        </div>
    );
};

export default Navbar;