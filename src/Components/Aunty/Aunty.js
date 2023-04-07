import React from 'react';
import './Aunty.css';
import Cousin from '../Cousin/Cousin';
const Aunty = () => {
    return (
        <div className='aunty'>
            <h3>Aunty</h3>
            <section className='cousin'>
                <Cousin></Cousin>
                <Cousin></Cousin>
                <Cousin></Cousin>
            </section>
        </div>
    );
};

export default Aunty;