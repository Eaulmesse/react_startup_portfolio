import { useState, useEffect } from "react";
import { ChevronRight } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";

const FaqCards = ({ title, description }) => {

    const [DisplayText, setDisplayText] = useState(false);

    const handleClick = () => {
        setDisplayText(!DisplayText);
    }

    return (
        <div className="mt-5">
    
            <button onClick={handleClick} className='w-full bg-neutral-900 p-5 rounded-2xl flex items-center justify-between cursor-pointer'>
                <p className='text-white poppins-medium text-sm lg:text-lg'>{title}</p>
                <ChevronRight className={`text-white w-8 h-8 ${DisplayText ? "hidden" : "block"} `} />
                <ChevronDown className={`text-white w-8 h-8 ${DisplayText ? "block" : "hidden"} `}  />

            </button>

            <p className={`text-white text-sm lg:text-base poppins-regular mt-2 w-[95%] m-auto ${DisplayText ? "block" : "hidden" } `} >{description}</p>
        </div>
    );
};

export default FaqCards;