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
            <nav className="flex w-4/5 rounded-[25px]  py-2 px-5 mt-5 mx-auto">
                <p className='text-xl poppins-medium text-white drop-shadow-lg absolute top-5'>Théo Guerin.</p>
                <div className='lg:flex lg:m-auto hidden  bg-zinc-900 py-2 px-3 rounded-[25px]'>
                    <NavLinks href={"#home"} text={"accueil."}/>
                    <NavLinks href={"#me"} text={"me."}/>
                    <NavLinks href={"#offer"} text={'offre.'}/>
                    <NavLinks href={"#contact"} text={'contact.'}/>
                </div>
                
                
                <BurgerButton toggleMenu={toggleMenu} onClick={handleClick}/>
                
                
            </nav>

            
            <BurgerMenu toggleMenu={toggleMenu}/>
            
            
            
            

        </div>
    );
};

export default Navbar;