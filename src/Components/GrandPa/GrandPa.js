import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css';


export const RingContext = createContext('Diamond Ring');      /*context full function er baire thake*/
const GrandPa = () => {
    const [house, setHouse] = useState(1);
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h3>GrandPa</h3>
                <section className="grandChild">
                    <Father></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;