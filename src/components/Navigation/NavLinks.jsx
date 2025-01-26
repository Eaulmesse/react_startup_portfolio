import React from "react";


function NavLinks({ href, text }) {
    return (
        <a className="min-w-16 py-1 px-5  text-center poppins-regular text-white text-lg rounded-full hover:bg-zinc-800" href={href}>{text}</a>
    );
}

export default NavLinks;