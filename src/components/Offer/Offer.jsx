import React, { useState } from "react";
import OfferCards from './OfferCards';

const Offer = () => {
    // Suivre l'index de la carte ouverte (-1 signifie qu'aucune carte n'est ouverte)
    const [openCardIndex, setOpenCardIndex] = useState(-1);

    // Gérer l'ouverture/fermeture d'une carte
    const handleOpen = (index) => {
        setOpenCardIndex(openCardIndex === index ? -1 : index); // Ouvre ou ferme la carte
    };

    const offers = [
        {
            title: 'Analyse approfondie des besoins',
            description: "Chaque projet débute par une phase d’écoute et de compréhension. J’analyse les objectifs de l’entreprise, les attentes des utilisateurs et les contraintes techniques pour m'assurer de répondre aux besoins spécifiques de chaque startup.",
        },
        {
            title: 'Conception centrée utilisateur',
            description: "Je mets l'accent sur une expérience utilisateur fluide, intuitive et agréable. En m'appuyant sur des principes de design éprouvés, j'élabore des interfaces qui non seulement captivent les utilisateurs mais répondent également à leurs attentes.",
        },
        {
            title: 'Développement agile et itératif',
            description: "Je travaille de manière agile, en itérant rapidement pour valider chaque fonctionnalité avec le client. Cela me permet de m’adapter aux retours tout au long du processus, garantissant une progression constante vers le produit final.",
        },
        {
            title: 'Optimisation des performances',
            description: "Je m’assure que chaque site est optimisé au maximum pour la vitesse de chargement, la réactivité et la fluidité, en utilisant les dernières technologies comme React.js et Tailwind CSS. Cela permet d’offrir une expérience agréable même sur les appareils les moins puissants.",
        },
        {
            title: 'Suivi post-lancement',
            description: "Mon travail ne s'arrête pas au lancement. Je suis disponible pour apporter des améliorations, corriger des bugs et optimiser les fonctionnalités en fonction des retours des utilisateurs et des évolutions de la startup.",
        }
    ];

    return (
        <div className="mt-10 py-10">
            <h2 className="poppins-medium text-2xl lg:text-4xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
                Mon Offre.
            </h2>

            

            <div className="w-4/5 flex m-auto flex-wrap justify-evenly background-layer py-5">
                <p className="poppins-regular text-gray-400 text-center text-xl mt-5">Je conçois des applications intuitives, réactives et optimisées pour offrir une expérience utilisateur fluide, tout en respectant les délais serrés des startups ambitieuses.</p>

                {offers.map((offer, index) => (
                    <OfferCards
                        key={index}
                        title={offer.title}
                        description={offer.description}
                        isOpen={openCardIndex === index} // Vérifie si cette carte est ouverte
                        handleOpen={() => handleOpen(index)} // Passe l'index à handleOpen
                    />
                ))}
            </div>
        </div>
    );
};

export default Offer;