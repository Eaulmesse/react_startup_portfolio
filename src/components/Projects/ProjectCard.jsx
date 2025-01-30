import React from 'react';
import { motion } from "framer-motion";

const ProjectCard = ({ title, technologies, preview, alt }) => {
    return (
        <motion.div whileHover={{ scale: 1.1, rotate: -2 }} className='min-w-[300px] md:min-w-[400px] lg:min-w-[500px] py-10'>
            <div className="relative">
                <img className="z-40 rounded-lg w-full" src={preview} alt={alt} />
                <p className="absolute z-50 bottom-2 left-2 poppins-regular text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    {title}
                </p>
            </div>

            <div className='flex space-x-2 mt-2 '>
                {technologies.map((tech, index) => (
                    <div className='text-white poppins-light text-sm bg-neutral-800 rounded-lg px-2' key={index}>{tech}</div>
                ))}
            </div>
           
        </motion.div>

    );
};

export default ProjectCard;