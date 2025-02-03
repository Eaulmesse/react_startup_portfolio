import React from 'react';
import { motion } from "framer-motion";

const ProjectCard = ({ title, technologies, preview, alt }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div whileHover={{ scale: 1.1, rotate: -2 }} className='min-w-[300px] md:min-w-[400px] lg:min-w-[500px] py-10'>
            <div className="relative">
                <img className="z-40 rounded-lg w-full" src={preview} alt={alt} />
                <p className="absolute z-50 bottom-2 left-2 poppins-regular text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    {title}
                </p>
            </div>

            <motion.div 
                className='flex space-x-2 mt-2'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {technologies.map((tech, index) => (
                    <motion.div 
                        className='text-white poppins-light text-sm bg-neutral-800 rounded-lg px-2' 
                        key={index}
                        variants={itemVariants}
                    >
                        {tech}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
