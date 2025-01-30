import React from 'react';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center lg:flex-row text-white w-5/6 m-auto mt-5 pb-2">
            <p className='text-xl poppins-medium text-white drop-shadow-lg'>Théo Guerin.</p>

            <div className='hidden lg:flex lg:m-auto space-x-5 poppins-regular text-white text-md'>
                <a href="">accueil.</a>
                <a href="">me.</a>
                <a href="">offre.</a>
                <a href="">contact.</a>
            </div>

            <div>
                <p className='text-md poppins-medium text-white drop-shadow-lg'>theo.guerin01120@gmail.com</p>

            </div>
        </footer>
    );
};

export default Footer;