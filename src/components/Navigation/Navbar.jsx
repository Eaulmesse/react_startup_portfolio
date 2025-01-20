import React, { useState } from 'react';
import NavLinks from './NavLinks';

import BurgerButton from './Mobile/BurgerButton';
import BurgerMenu from './Mobile/BurgerMenu';


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    

    const handleClick = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <div className='relative'>
            <nav className="flex w-4/5 rounded-[25px] justify-between items-center  py-2 px-5 mt-5 mx-auto bg-gradient-to-r from-zinc-700 to-zinc-800 shadow-md shadow-zinc-800 z-50 relative ">
                <p className='poppins-semibold text-white drop-shadow-lg'>Théo Guerin</p>
                <div className='lg:flex lg:m-auto hidden space-x-5'>
                    <NavLinks href={"#home"} text={"accueil"}/>
                    <NavLinks href={"#projects"} text={"projets"}/>
                    <NavLinks href={"#opinions"} text={"témoignages."}/>
                    <NavLinks href={"#opportunities"} text={'offre.'}/>
                    <NavLinks href={"#contact"} text={'contact.'}/>
                </div>
                
                
                <BurgerButton toggleMenu={toggleMenu} onClick={handleClick}/>
                
                
            </nav>

            
            <BurgerMenu toggleMenu={toggleMenu}/>
            
            
            
            

        </div>
    );
};

export default Navbar;