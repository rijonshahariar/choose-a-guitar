import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Cart from '../Cart/Cart';
import Product from "../Product/Product"
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [random, setRandom] = useState([]);

    useEffect(() => {
        fetch('fakeDB.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // Cart Behaviour Function
    const [cart, setCart] = useState([]);
    const handleAddToCart = (guitar) => {
        const newGuitar = [...cart, guitar];
        if (cart.length === 0) {
            setCart(newGuitar);
        } else {
            const newCart = [...cart];
            const index = newCart.findIndex((item) => item.id === guitar.id);
            if (index === -1) {
                setCart(newGuitar);
            } else {
                newCart[index] = guitar;
                setCart(newCart);
            }
        }
    };
    // Maximum 4 items can be added
    if (cart.length > 4) {
        alert("You can't add more than 4 guitars in Cart")
        const newProducts = [...cart];
        newProducts.splice(4, 1);
        setCart(newProducts);
    }

    // Remove Products from cart one-by-one
    const removeFromCart = (id) => {
        const newList = cart.filter((item) => item.id !== id);
        setCart(newList);
    };

    // Clear the cart
    const clearCart = () => {
        const newList = [];
        setCart(newList);
        setRandom([]);
    };
    // Random item selection
    const getRandom = () => {
        if (cart.length === 0) {
            alert("Choose atleast 2 item to compare")
            return
        }
        else {
            const random = cart[Math.floor(Math.random() * cart.length)];
            setRandom(random);
        }


    }

    return (
        <div className='shop-container'>

            <div className='products-container reverse-main'>
                {
                    products.map(product => <Product key={product.id} showProducts={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} getRandom={getRandom} random={random}></Cart>
            </div>

        </div>
    );
};



export default Shop;