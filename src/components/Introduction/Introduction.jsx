import React from 'react';

import Me from './Me';
import Experience from './Experience';

const Introduction = () => {
    return (
        <div className="mt-10 w-4/5 m-auto">
            <h2 className='text-white poppins-bold text-xl text-center lg:text-left'>Je me <span className='text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Présente</span></h2>

            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-5 mt-2">
                <Me />
                <Experience />
            </div>
            
        </div>
    );
};

export default Introduction;