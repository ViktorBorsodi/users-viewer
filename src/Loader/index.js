import React from 'react';
import './style.css'

const Loader = () => {
    return (
        <div className='loader-container' >
            <div className='circle pulsing-circle' style={{animationDelay: '0s'}} ></div>
            <div className='circle pulsing-circle' style={{animationDelay: '2s'}} ></div>
            <div className='circle static-circle' ></div>
        </div>
    );
}

export default Loader;