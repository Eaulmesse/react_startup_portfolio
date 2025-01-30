import React from 'react';
import ExperienceLine from './ExperienceLine';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <motion.div initial={{ opacity: 0, translateY: "20px" }} whileInView={{ opacity: 1, translateY: "0px" }} viewport={{ once: true}} transition={{ delay: 1.5 ,duration: 0.5 }} className="w-full lg:w-1/3 bg-neutral-900 rounded-xl m-auto relative p-5">
            <div className="flex flex-col h-full justify-between ">
                <ExperienceLine 
                    title="Formation aux bases du développement web" 
                    duration="4 mois" 
                    animDelay={2}
                />
                <ExperienceLine 
                    title="Diplôme BAC +2 Développeur Web/Mobile" 
                    duration="1 an et 1 mois" 
                    animDelay={2.1}
                />
                <ExperienceLine 
                    title="Bachelor Concepteur - Développeur d'applications" 
                    duration="1 an" 
                    animDelay={2.3}
                />
            </div>
        </motion.div>
    );
};

export default Experience;
