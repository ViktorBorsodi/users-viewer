import React from 'react';
import './style.css'

const Card = ({data}) => {
    return (
        <div className='Card' >
            <div className='img-container' ><img src={data.avatar} alt="user"/></div>
            <p>{`${data.first_name} ${data.last_name}`}</p>
        </div>
    );
}

export default Card;