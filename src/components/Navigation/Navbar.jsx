import React, { useState } from 'react';
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
        <div className='relative'>
            <nav className="flex justify-between items-center w-4/5 rounded-[25px] py-2  mt-5 mx-auto">
                <p className='text-xl poppins-medium text-white drop-shadow-lg  top-5 lg:absolute'>Théo Guerin.</p>
                <div className='lg:flex lg:m-auto hidden bg-zinc-900 py-2 px-3 rounded-[25px]'>
                    <NavLinks href={"#home"} text={"accueil."}/>
                    <NavLinks href={"#me"} text={"me."}/>
                    <NavLinks href={"#offer"} text={'offre.'}/>
                    <NavLinks href={"#contact"} text={'contact.'}/>
                </div>
                
                <div className='z-50'>
                    <BurgerButton toggleMenu={toggleMenu} onClick={handleClick}/>
                </div>
            </nav>

            
            <BurgerMenu toggleMenu={toggleMenu}/>
            
            
            
            

        </div>
    );
};

export default Navbar;