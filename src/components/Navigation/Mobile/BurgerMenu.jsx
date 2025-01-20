import React, { useState } from 'react';
import NavLinks from '../NavLinks';


const BurgerMenu = ({ toggleMenu, onClick }) => {
    return (
        <div className={`lg:hidden rounded-[25px] left-1/2 -translate-x-1/2  absolute w-4/5 z-30 bg-gradient-to-r from-zinc-700 to-zinc-800 shadow-md shadow-zinc-800 z-50 transition duration-300 py-5 ${toggleMenu ? 'translate-y-[-40px]  opacity-100' : 'translate-y-[-60px] opacity-0'}`}>

            <div className='flex flex-col mt-10 px-5 space-y-2'>
                <NavLinks href={"#home"} text={"accueil."} />
                <NavLinks href={"#projects"} text={"projets"} />
                <NavLinks href={"#opinions"} text={"témoignages."} />
                <NavLinks href={"#opportunities"} text={'offre.'} />
                <NavLinks href={"#contact"} text={'contact.'} />
            </div>
            
        </div>
    );
};

export default BurgerMenu;
