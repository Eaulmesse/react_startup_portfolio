import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const OfferCards = ({ title, description }) => {
  
    const [isXL, setIsXL] = useState(window.innerWidth >= 1280);

    useEffect(() => {
        const handleResize = () => setIsXL(window.innerWidth >= 1280);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Variants pour gérer l'état hover
    const parentVariants = {
        hover: {}, // Pas d'effet sur le parent directement
    };

    const childVariants = {
        hover: { height: "40px" }, // Hauteur lors du hover sur le parent
    };

  return (
    <motion.div className="max-w-[256px] w-full flex flex-col items-center justify-center bg-neutral-900 p-5 rounded-2xl relative overflow-hidden m-5"  whileHover="hover" initial="initial" >

        <p className="w-5/6 text-white poppins-bold text-xl lg:text-2xl">{title}</p>
        <p className="w-5/6 text-white poppins-medium text-sm mt-5">{description}</p>

        <motion.div whileInView={{ height: isXL ? "320px" : "40px"}} className="w-80 h-96 -rotate-6 bg-gradient-to-b from-pink-500 to-purple-500 absolute -bottom-5" variants={childVariants}>
            <p className="text-center text-white poppins-medium hidden lg:block">Découvrez la carte</p>
        </motion.div>
      

    </motion.div>
  );
};

export default OfferCards;