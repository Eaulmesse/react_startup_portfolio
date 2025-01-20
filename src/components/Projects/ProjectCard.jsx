import React from 'react';

const ProjectCard = ({ title, technologies, preview, alt }) => {
    return (
        <div className='w-4/5'>
            <div className="relative">
    <img className="z-40 rounded-lg w-full" src={preview} alt={alt} />
    <p className="absolute z-50 bottom-2 left-2 poppins-regular text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        {title}
    </p>
</div>

            <div className='flex space-x-2 mt-2'>
                {technologies.map((tech, index) => (
                    <div className='text-white poppins-light text-sm bg-purple-500 rounded-lg px-2' key={index}>{tech}</div>
                ))}
            </div>
           
        </div>

            
    );
};

export default ProjectCard;