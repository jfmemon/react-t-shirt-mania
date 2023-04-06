import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exitingTshirt = cart.find(ts => ts._id === tshirt._id);
        if (exitingTshirt) {
            alert('This item is already added.');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            // alert('Successfully added.');
        }
    }

    const handleRemoveFromCart = tshirt => {
        const remainingTshirt = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remainingTshirt);
    }

    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;