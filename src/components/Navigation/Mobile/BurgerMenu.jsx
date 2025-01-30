import React, { useState } from 'react';
import NavLinks from '../NavLinks';


const BurgerMenu = ({ toggleMenu }) => {
    return (
        <div className={`lg:hidden rounded-[12px] left-1/2 -translate-x-1/2  absolute w-4/5 bg-neutral-900 z-40 transition duration-300  ${toggleMenu ? 'translate-y-[0px]  opacity-100' : 'translate-y-[-10px] opacity-0'}`}>

            <div  className='flex flex-col items-start  p-2 space-y-2'>
                <NavLinks href={"#home"} text={"accueil."} />
                <NavLinks href={"#me"} text={"moi."} />
                <NavLinks href={"#projects"} text={"projects."}/>
                <NavLinks href={"#offer"} text={'offre.'} />
                <NavLinks href={"#contact"} text={'contact.'} />
            </div>
            
        </div>
    );
};

export default BurgerMenu;
