import React from 'react';
import './Uncle.css';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div className='uncle'>
            <h3>Uncle</h3>
            <section className='cousin'>
                <Cousin></Cousin>
                <Cousin></Cousin>
                <Cousin></Cousin>
            </section>
        </div>
    );
};

export default Uncle;