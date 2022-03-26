import React from 'react';
import "./Cart.css"

import RandomItem from '../RandomItem/RandomItem';
import DisplayCart from '../DisplayCart/DisplayCart';


const Cart = (props) => {
    const { cart, removeFromCart, clearCart, chooseRandom, random } = props;

    return (
        <div className='cart reverse-main'>
            <h3>Selected Products</h3>
            {
                cart.map(product => <DisplayCart
                    key={product.id}
                    showProducts={product} removeFromCart={removeFromCart}
                ></DisplayCart>)
            }
            <RandomItem random={random}></RandomItem>
            <div className='cart-btn'>
                <button onClick={chooseRandom}>Choose 1 For Me</button><br />
                <button onClick={clearCart}>Choose Again</button>
            </div>
        </div>
    );
};
export default Cart;