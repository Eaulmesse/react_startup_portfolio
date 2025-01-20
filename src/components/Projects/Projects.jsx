import React from 'react';
import ProjectCard from './ProjectCard';

import VintzenPreview from '../../assets/vintzen_preview.png';

const Projects = () => {
    return (
        <div className='mt-20'>
            <h2 className='poppins-regular text-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center'>Projets récents.</h2>
            

            <div className='mt-5'>
                <ProjectCard title={"Vintzen"} technologies={["React", "Motion Framer", "Figma"]} preview={VintzenPreview} alt={"Image de previsualisation de la landing page de Vintzen"} />
            </div>
        </div>
    );
};

export default Projects;