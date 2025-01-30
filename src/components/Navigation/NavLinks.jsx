import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';



function NavLinks({ href, text }) {
    const handleClick = (e) => {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Link 
            to={href} 
            onClick={handleClick}
            className="min-w-16 py-1 px-5 text-center poppins-regular text-white text-lg rounded-full hover:bg-zinc-800 duration-200"
        >
            {text}
        </Link>
    );
}

export default NavLinks;