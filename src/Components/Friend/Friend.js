import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>Friend</h3>
            <p>Gift: {house}</p>
            <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Friend;