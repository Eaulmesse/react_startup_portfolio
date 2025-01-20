import React from "react";


function NavLinks({ href, text }) {
    return (
        <a className="poppins-regular text-white text-lg" href={href}>{text}</a>
    );
}

export default NavLinks;