import React from 'react';
import Disponibility from './Disponibility';
import Network from './Network';
import  AvailableButton from "../misc/AvailableButton";


const Contact = () => {
    return (
        <div id='contact' className="w-5/6 h-full m-auto flex flex-col items-stretch lg:flex-row  items-center space-y-5 lg:space-y-0 lg:space-x-5 py-5">
            <Disponibility />
            <Network />
        </div>
    );
};

export default Contact;