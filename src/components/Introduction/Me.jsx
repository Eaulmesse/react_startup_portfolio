import React from 'react';
import avatar from "../../assets/avatar.png"

const Me = () => {
    return (
        <div className="w-full h-max flex flex-col px-5 pt-5 bg-neutral-900 rounded-xl text-white poppins-medium relative sm:flex-row">
            <p className="text-[12px] md:text-sm lg:text-base sm:pb-5 z-50 self-center">
                Je m’appelle Théo. Je suis un passionné de nouvelles technologies qui a trouvé un vrai plaisir dans le développement informatique. Ce que j’aime par-dessus tout, c’est créer des interfaces qui allient design et performance. Naturellement, je me suis tourné vers le développement front-end, où ma créativité peut s’exprimer pleinement. Mon objectif est de concevoir des expériences web sur-mesure, simples et intuitives, qui marquent les utilisateurs.
            </p>
            <img src={avatar} className="mt-5 self-center w-48 md:w-64 sm:self-end" alt="Mon avatar" />
        </div>
    );
};

export default Me;