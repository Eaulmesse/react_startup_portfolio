import React from 'react';
import RecommendationCards from './RecommendationCards';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftRight} from "@fortawesome/free-solid-svg-icons";


const Recommendations = () => {

    const recommendations = [
        { name: "caca", job: "Sass" , text: '"Vintzen est un développeur web talentueux qui a su répondre à nos attentes."' },
        { name: "Vintzen", job: "Sass" , text: '"Vintzen est un développeur web talentueux qui a su répondre à nos attentes."' },
        { name: "Vintzen", job: "Sass" , text: '"Vintzen est un développeur web talentueux qui a su répondre à nos attentes."' },
    ];

    // Étendre les projets pour simuler un défilement infini


    // Durée d'animation en fonction du breakpoint

    

    return (
        <div className="mt-20 overflow-hidden">
            <h2 className="poppins-medium text-2xl lg:text-4xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
                Recommandations.
            </h2>
    
            <div className="background-layer py-5">
                <div className="w-4/5 flex space-x-5 md:space-x-0 overflow-x-auto m-auto mt-5 md:flex-wrap md:justify-evenly">
                    {recommendations.map((recommendation, index) => (
                        <RecommendationCards
                            key={index}
                            name={recommendation.name}
                            job={recommendation.job}
                            text={recommendation.text}
                        />
                    ))}
                </div>
                
                <motion.div
                    className="flex flex-col items-center mt-5 md:hidden text-white"
                    animate={{
                        scale: [1.0, 0.9, 1.0], // Animation de la taille
                    }}
                    transition={{
                        duration: 2, // Durée de l'animation
                        repeat: Infinity, // Répétition infinie
                        repeatType: "loop", // Boucle continue
                        ease: "easeInOut", // Fluidité de l'animation
                    }}
                >
                    <FontAwesomeIcon icon={faLeftRight} className="text-4xl m-auto" />
                    <p className="poppins-bold text-xl">Scroll</p>
                </motion.div>
                
            </div>
        </div>
    );
};

export default Recommendations;