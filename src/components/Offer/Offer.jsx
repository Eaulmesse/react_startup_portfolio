import React, { useState } from "react";
import OfferCards from './OfferCards';
import FaqCards from "./FaqCards";


const Offer = () => {
    return (
        <div id="offer" className="mt-10 py-10 w-5/6 mx-auto">
            <h2 className="poppins-semibold text-xl  text-white text-center">
                Mon <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-2xl ">Offre</span>
            </h2>

            <div className="flex flex-wrap justify-evenly mt-10">
                <OfferCards title={"Conception centrée utilisateur"} description={"Je mets l'accent sur une expérience utilisateur fluide, intuitive et agréable. En m'appuyant sur des principes de design éprouvés, j'élabore des interfaces qui non seulement captivent les utilisateurs mais répondent également à leurs attentes."}/>

                <OfferCards title={"Conception centrée utilisateur"} description={"Je mets l'accent sur une expérience utilisateur fluide, intuitive et agréable. En m'appuyant sur des principes de design éprouvés, j'élabore des interfaces qui non seulement captivent les utilisateurs mais répondent également à leurs attentes."}/>

                <OfferCards title={"Conception centrée utilisateur"} description={"Je mets l'accent sur une expérience utilisateur fluide, intuitive et agréable. En m'appuyant sur des principes de design éprouvés, j'élabore des interfaces qui non seulement captivent les utilisateurs mais répondent également à leurs attentes."}/>

                <OfferCards title={"Conception centrée utilisateur"} description={"Je mets l'accent sur une expérience utilisateur fluide, intuitive et agréable. En m'appuyant sur des principes de design éprouvés, j'élabore des interfaces qui non seulement captivent les utilisateurs mais répondent également à leurs attentes."}/>
            </div>

            <div>
                <FaqCards title={"Quelles compétences je met à votre service ?"} description={"Je mets l'accent sur une expérience utilisateur fluide, intuitive et agréable. En m'appuyant sur des principes de design éprouvés, j'élabore des interfaces qui non seulement captivent les utilisateurs mais répondent également à leurs attentes."}/>

                <FaqCards title={"Quelles compétences je met à votre service ?"} description={"Je mets l'accent sur une expérience utilisateur fluide, intuitive et agréable. En m'appuyant sur des principes de design éprouvés, j'élabore des interfaces qui non seulement captivent les utilisateurs mais répondent également à leurs attentes."}/>

                <FaqCards title={"Quelles compétences je met à votre service ?"} description={"Je mets l'accent sur une expérience utilisateur fluide, intuitive et agréable. En m'appuyant sur des principes de design éprouvés, j'élabore des interfaces qui non seulement captivent les utilisateurs mais répondent également à leurs attentes."}/>
            </div>
           

        </div>
    );
};


export default Offer;

