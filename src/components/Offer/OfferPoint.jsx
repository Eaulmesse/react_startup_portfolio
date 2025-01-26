import React from 'react';
import PropTypes from 'prop-types';

const OfferPoint = ({ title, description }) => {
    return (

        <div className="flex justify-between py-5">
            <div className="circle-offer "></div>
            <div className="w-5/6">
                <p className="poppins-regular text-white text-lg">{title}</p>
                <p className="poppins-regular text-gray-400 text-base">{description}</p>
            </div>
        </div>

    );
};


export default OfferPoint;