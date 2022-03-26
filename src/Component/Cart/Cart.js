import React from 'react';
import "./Cart.css"

import RandomItem from '../RandomItem/RandomItem';
import DisplayCart from '../DisplayCart/DisplayCart';


const Cart = (props) => {
    const { cart, removeFromCart, clearCart, getRandom, random } = props;

    return (
        <div className='cart reverse-main'>
            <h3>Cart Items</h3>
            {
                cart.map(product => <DisplayCart
                    key={product.id}
                    showProducts={product} removeFromCart={removeFromCart}
                ></DisplayCart>)
            }
            <RandomItem random={random}></RandomItem>
            <div className='cart-btn'>
                <button onClick={getRandom}>CHOOSE 1 FOR ME</button>
                <button onClick={clearCart}>CHOOSE AGAIN</button>


            </div>
        </div>
    );
};
export default Cart;