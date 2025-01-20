import React from 'react';
import OfferButton from '../misc/OfferButton';

const Header = () => {

    return (
        <header>
            <h1 className='w-4/5  m-auto text-center poppins-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-4xl md:text-6xl lg:text-7xl py-3 mt-5 lg:mt-10'>Développeur Front-End pour Startups : MVP rapides et interfaces engageantes."</h1>
            <p className='w-4/5 lg:w-3/5 poppins-regular text-center m-auto text-xl text-neutral-500'>Je conçois des applications intuitives, réactives et optimisées pour offrir une expérience utilisateur fluide, tout en respectant les délais serrés des startups ambitieuses.</p>

            <div className='flex justify-center h-fit'>
                <OfferButton label={"Mon Offre"}/>
            </div>
            
        </header>
    );
};

export default Header;