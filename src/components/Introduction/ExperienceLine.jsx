import React from 'react';

const ExperienceLine = ({ title, duration }) => {
    return (
        <div className='w-full flex justify-between items-center relative'>
            <div className='absolute left-0  w-5 h-5 bg-purple-500 rounded-full shadow-[0_0px_20px] shadow-violet-500'></div>
            
            <div className='ml-10'>
                <div>
                    <p className='text-white poppins-semibold text-[13px]'>
                    {title}
                </p>
                </div>
                

                <p className='text-gray-300 poppins-semibold text-[12px]'>{duration}</p>
            </div>
        </div>
    );
};

export default ExperienceLine;