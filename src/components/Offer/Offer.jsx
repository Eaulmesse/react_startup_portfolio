import React from "react";
import { motion } from "framer-motion";
import OfferCards from './OfferCards';
import FaqCards from "./FaqCards";

const Offer = () => {
    const offerContents = [
        {
            title: "Conception centrée utilisateur",
            description: "Je mets l'accent sur une expérience utilisateur fluide, intuitive et agréable. En m'appuyant sur des principes de design éprouvés, j'élabore des interfaces qui non seulement captivent les utilisateurs mais répondent également à leurs attentes."
        },
        {
            title: "Développement Front-End avancé",
            description: "Utilisant les dernières technologies comme React et Next.js, je crée des interfaces web performantes et réactives. Mon code est propre, maintenable et optimisé pour une expérience utilisateur sans faille."
        },
        {
            title: "Optimisation des performances",
            description: "Je m'assure que chaque site ou application que je développe est rapide et efficace. J'optimise le chargement, minimise le temps de réponse et améliore l'expérience globale de l'utilisateur."
        },
        {
            title: "Intégration et déploiement continus",
            description: "J'implémente des pipelines CI/CD pour automatiser les tests et le déploiement, garantissant ainsi des mises à jour rapides et fiables de votre produit."
        }
    ];

    const faqContent = [
        {
            
            title: "À qui s'adresse mon service de développement web ?",
            description: "Je suis spécialisé dans l'accompagnement des startups et des entrepreneurs qui souhaitent une présence web moderne, performante et qui convertit. Mon objectif est de transformer votre vision en une interface utilisateur élégante et fonctionnelle."
        },
        {
            
            title: "Combien coûte le développement d'un site web ou d'une application ?",
            description: "Chaque projet est unique. Mes tarifs démarrent à partir de 280e/jour pour un MVP (Minimum Viable Product) et peuvent varier selon la complexité. Je propose toujours un devis personnalisé après un brief détaillé de vos besoins."
        },
        {
            
            title: "Combien de temps faut-il pour développer mon projet ?",
            description: "Un site vitrine prend généralement 2-3 semaines, un MVP de 4 à 8 semaines. Le délai dépend de la complexité de votre projet, de la clarté du cahier des charges et de la rapidité des validations. Je m'engage à livrer dans les temps convenus."
        }
        
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = (index) => ({
        hidden: { 
            opacity: 0, 
            y: index % 2 === 0 ? 50 : -50 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    });

    return (
        <div id="offer" className="mt-10 py-10 w-5/6 mx-auto">
            <h2 className="poppins-semibold text-xl text-white text-center">
                Mon <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-2xl ">Offre</span>
            </h2>

            <motion.div 
                className="flex flex-wrap justify-evenly mt-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {offerContents.map((offer, index) => (
                    <motion.div key={index} variants={cardVariants(index)}>
                        <OfferCards 
                            title={offer.title} 
                            description={offer.description}
                        />
                    </motion.div>
                ))}
            </motion.div>

            
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {faqContent.map((faq, index) => (
                    <motion.div key={index} variants={cardVariants(index)}>
                        <FaqCards 
                            title={faq.title} 
                            description={faq.description}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Offer;
