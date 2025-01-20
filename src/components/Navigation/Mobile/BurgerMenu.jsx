import React, { useState } from 'react';
import NavLinks from '../NavLinks';


const BurgerMenu = ({ toggleMenu, onClick }) => {
    return (
        <div className={`lg:hidden flex flex-col  rounded-[25px] left-1/2 -translate-x-1/2  absolute w-4/5 z-40 bg-gradient-to-r from-zinc-700 to-zinc-800 shadow-md shadow-zinc-800 z-50 transition duration-300 p-5 space-y-2 ${toggleMenu ? 'translate-y-[-40px]  opacity-100' : 'translate-y-[-65px]  opacity-0'}`}>

            <NavLinks href={"#home"} text={"accueil."} />
            <NavLinks href={"#projects"} text={"projets"} />
            <NavLinks href={"#opinions"} text={"témoignages."} />
            <NavLinks href={"#opportunities"} text={'offre.'} />
            <NavLinks href={"#contact"} text={'contact.'} />
        </div>
    );
};

export default BurgerMenu;
