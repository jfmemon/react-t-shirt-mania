import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    const message = cart.length === 0 ? <p>Please add some products.</p> : <p>Thanks for buying from us.</p>;
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <h5 className={`bold ${cart.length === 0 ? 'red' : 'yellow'}`}>Total orders: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;