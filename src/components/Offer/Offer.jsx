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
            description: "J'utilise React et Next.js pour des interfaces web performantes et réactives, optimisées pour l'utilisateur. Côté backend, j'implémente des APIs robustes avec Node.js ou Python. Mon approche fullstack assure une solution complète et efficace."
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
            description: "Je cible les entreprises et startups qui veulent une application web non seulement belle, mais surtout extrêmement performante et fiable. Je conçois des solutions fullstack qui répondent précisément à vos besoins, pour une expérience utilisateur et une scalabilité sans compromis."
        },
        {
            
            title: "Combien coûte le développement d'un site web ou d'une application ?",
            description: "Le coût d'un projet de développement web est toujours personnalisé, car chaque besoin est unique. Il est directement lié à la complexité et aux fonctionnalités spécifiques que vous souhaitez voir intégrées. Pour vous donner une idée, mon taux journalier moyen est de 300 € HT. Ce tarif reflète mon expertise en technologies modernes comme React, Next.js, Node.js et mon engagement à livrer des solutions performantes, maintenables et sécurisées. Afin de vous fournir une estimation juste et détaillée, je vous invite à un premier échange gratuit. Nous pourrons discuter de votre vision et des fonctionnalités essentielles. Cela me permettra de définir un périmètre clair et de vous présenter un devis précis et transparent, en adéquation avec la valeur que j'apporte à votre projet."
        },
        {
            
            title: "Combien de temps faut-il pour développer mon projet ?",
            description: "Le temps de développement varie selon la complexité et les fonctionnalités spécifiques de votre projet. Un site simple peut être livré en quelques semaines. Pour une application plus élaborée avec des fonctionnalités avancées, cela peut prendre quelques mois. Pour vous donner un calendrier réaliste et précis, nous devons échanger sur vos besoins. Cet entretien me permettra de définir le périmètre exact et de vous communiquer une date de livraison claire, en visant toujours l'efficacité et la qualité"
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
