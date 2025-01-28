import React from 'react';
import ExperienceLine from './ExperienceLine';

const Experience = () => {
    return (
        <div className="w-full lg:w-1/3 bg-neutral-900 rounded-xl m-auto relative p-5">
            <div className="flex flex-col h-full justify-between ">
                <ExperienceLine 
                    title="Formation aux bases du développement web" 
                    duration="4 mois" 
                />
                <ExperienceLine 
                    title="Diplôme BAC +2 Développeur Web/Mobile" 
                    duration="1 an et 1 mois" 
                />
                <ExperienceLine 
                    title="Bachelor Concepteur - Développeur d'applications" 
                    duration="1 an" 
                />
            </div>
        </div>
    );
};

export default Experience;
