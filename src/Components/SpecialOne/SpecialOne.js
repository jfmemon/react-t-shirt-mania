import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const SpecialOne = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h3>Special one</h3>
            <p>Gift: {house}</p> 
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default SpecialOne;