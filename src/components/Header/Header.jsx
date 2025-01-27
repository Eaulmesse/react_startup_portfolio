import React from 'react';
import OfferButton from '../misc/OfferButton';
import AvailableButton from '../misc/AvailableButton';

const Header = () => {

    return (
        <header className='w-[90%] m-auto flex flex-col items-center z-50'>
            <div className='mt-5'>
                <AvailableButton />
            </div>

            <h1 className='text-center text-[22px] sm:text-4xl md:text-5xl lg:text-7xl poppins-bold text-white mt-5'>Développeur <br /> 
            <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Front-End</span> pour <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Startups</span></h1>

            <p className='text-sm sm:text-lg md:text-xl lg:text-3xl  poppins-bold text-white'>MVP <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>rapides</span> et interfaces <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>engageantes</span>.</p>

            <p className='poppins-regular text-center m-auto text-sm sm:text-md md:text-lg text-neutral-300 mt-5'>Je conçois des applications intuitives, réactives et optimisées pour offrir une expérience utilisateur fluide, tout en respectant les délais serrés des startups ambitieuses.</p>

            <div className='flex justify-center h-fit'>
                <OfferButton label={"Mon Offre"}/>
            </div>
            
        </header>
    );
};

export default Header;