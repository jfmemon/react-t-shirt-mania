import React from 'react';
import './Tshirt.css';
const TShirt = ({tshirt, handleAddToCart}) => {
    const {name, picture, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p><small>Price: ${price}</small></p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default TShirt;