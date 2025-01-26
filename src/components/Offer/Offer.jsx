import React, { useState } from "react";
import OfferCards from './OfferCards';
import OfferPoint from "./OfferPoint";

const Offer = () => {
    
    // const [openCardIndex, setOpenCardIndex] = useState(-1);

    // const handleOpen = (index) => {
    //     setOpenCardIndex(openCardIndex === index ? -1 : index); 
    // };

    // const offers = [
    //     {
    //         title: 'Analyse approfondie des besoins',
    //         description: "Chaque projet débute par une phase d’écoute et de compréhension. J’analyse les objectifs de l’entreprise, les attentes des utilisateurs et les contraintes techniques pour m'assurer de répondre aux besoins spécifiques de chaque startup.",
    //     },
    //     {
    //         title: 'Conception centrée utilisateur',
    //         description: "Je mets l'accent sur une expérience utilisateur fluide, intuitive et agréable. En m'appuyant sur des principes de design éprouvés, j'élabore des interfaces qui non seulement captivent les utilisateurs mais répondent également à leurs attentes.",
    //     },
    //     {
    //         title: 'Développement agile et itératif',
    //         description: "Je travaille de manière agile, en itérant rapidement pour valider chaque fonctionnalité avec le client. Cela me permet de m’adapter aux retours tout au long du processus, garantissant une progression constante vers le produit final.",
    //     },
    //     {
    //         title: 'Optimisation des performances',
    //         description: "Je m’assure que chaque site est optimisé au maximum pour la vitesse de chargement, la réactivité et la fluidité, en utilisant les dernières technologies comme React.js et Tailwind CSS. Cela permet d’offrir une expérience agréable même sur les appareils les moins puissants.",
    //     },
    //     {
    //         title: 'Suivi post-lancement',
    //         description: "Mon travail ne s'arrête pas au lancement. Je suis disponible pour apporter des améliorations, corriger des bugs et optimiser les fonctionnalités en fonction des retours des utilisateurs et des évolutions de la startup.",
    //     }
    // ];

    // return (
    //     <div className="mt-10 py-10">
    //         <h2 className="poppins-medium text-2xl lg:text-4xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
    //             Mon Offre.
    //         </h2>

            

    //         <div className="w-4/5 flex m-auto flex-wrap justify-evenly background-layer py-5">
    //             <p className="poppins-regular text-gray-400 text-center text-xl mt-5">Je conçois des applications intuitives, réactives et optimisées pour offrir une expérience utilisateur fluide, tout en respectant les délais serrés des startups ambitieuses.</p>

    //             {offers.map((offer, index) => (
    //                 <OfferCards
    //                     key={index}
    //                     title={offer.title}
    //                     description={offer.description}
    //                     isOpen={openCardIndex === index} // Vérifie si cette carte est ouverte
    //                     handleOpen={() => handleOpen(index)} // Passe l'index à handleOpen
    //                 />
    //             ))}
    //         </div>
    //     </div>
    // );


    return (
        <div className="mt-10 py-10">
            
            <h2 className="poppins-medium text-2xl lg:text-4xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center my-10">
                Mon Offre.
            </h2>
            
            
            <div className="border-2 rounded-xl border-purple-500 w-4/5 lg:w-3/6 xl:w-2/5  m-auto shadow-lg shadow-purple-500">
                <div className="w-5/6 border-b-2 border-purple-500 py-5 m-auto">
                    <p className="text-3xl poppins-medium text-white py-5">Base</p>
                    <p className="poppins-regular text-gray-400 text-md">Je conçois des applications intuitives, réactives et optimisées pour offrir une expérience utilisateur fluide, tout en respectant les délais serrés des startups ambitieuses.</p>
                </div>

                <div className="w-5/6 py-5 m-auto">
                    <p className="poppins-regular text-white text-lg pb-10">Offre de base modifiable selon les besoins : </p>

                    <div>
                        <OfferPoint title={"Analyse approfondie des besoins"} description={"Chaque projet débute par une phase d’écoute et de compréhension. J’analyse les objectifs de l’entreprise, les attentes des utilisateurs et les contraintes techniques pour m'assurer de répondre aux besoins spécifiques de chaque startup."} />

                        <OfferPoint title={"Conception centrée utilisateur"} description={"Je mets l'accent sur une expérience utilisateur fluide, intuitive et agréable. En m'appuyant sur des principes de design éprouvés, j'élabore des interfaces qui non seulement captivent les utilisateurs mais répondent également à leurs attentes."} />

                        <OfferPoint title={"Développement agile et itératif"} description={"Je travaille de manière agile, en itérant rapidement pour valider chaque fonctionnalité avec le client. Cela me permet de m’adapter aux retours tout au long du processus, garantissant une progression constante vers le produit final."} />

                        <OfferPoint title={"Optimisation des performances"} description={"Je m’assure que chaque site est optimisé au maximum pour la vitesse de chargement, la réactivité et la fluidité, en utilisant les dernières technologies comme React.js et Tailwind CSS. Cela permet d’offrir une expérience agréable même sur les appareils les moins puissants."} />

                        <OfferPoint title={"Suivi post-lancement"} description={"Mon travail ne s'arrête pas au lancement. Je suis disponible pour apporter des améliorations, corriger des bugs et optimiser les fonctionnalités en fonction des retours des utilisateurs et des évolutions de la startup."} />

                        
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Offer;

