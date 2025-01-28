import React from 'react';
import XLogo from "../../assets/svg/x-logo.png"

const Network = () => {
    return (
        <div className='w-full lg:w-3/5 rounded-2xl bg-neutral-900 flex flex-col justify-between'>
            
            <div className=''>
                <p className='text-white poppins-bold text-3xl p-5'>Je suis aussi sur les <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>réseaux</span></p>

                <p className='text-white poppins-regular px-5 text-neutral-400'>Je suis actif sur X pour y poster mes actualités, tips et avancées personnelles. N’hésitez pas à me rejoindre, ou même me contacter.</p>
            </div>
            

            <div className='p-5 flex  items-center space-x-2'>
                
                <a href="" className='w-32 text-center text-cyan-500 poppins-semibold bg-neutral-800 py-3 rounded-full '>Linkedin</a>
                
                <a href="" className='w-24 text-center text-red-500 poppins-semibold bg-neutral-800 py-3 rounded-full' >Malt</a>
                <a href="" className='w-12'>
                    <img src={XLogo} alt="" />
                </a>
                
            </div>
            
        </div>
    );
};

export default Network;