import React from 'react';
import './Father.css';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import Myself from '../Myself/Myself';

const Father = () => {
    return (
        <div className='father'>
            <h3>Father</h3>
            <section className='fathersChild'>
                <Brother></Brother>
                <Sister></Sister>
                <Myself></Myself>
            </section>
        </div>
    );
};

export default Father;