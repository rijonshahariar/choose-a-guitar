import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Cart from '../Cart/Cart';
import Product from "../Product/Product"
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [random, setRandom] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    /* Cart functionality */
    const [cart, setCart] = useState([]);
    const handleAddToCart = (course) => {
        const newCourse = [...cart, course];
        if (cart.length === 0) {
            setCart(newCourse);
        } else {
            const newCart = [...cart];
            const index = newCart.findIndex((item) => item.id === course.id);
            if (index === -1) {
                setCart(newCourse);
            } else {
                newCart[index] = course;
                setCart(newCart);
            }
        }
    };
    // if cart items is greater than 4 then show alert
    if (cart.length > 4) {
        alert("Slow down! You are going too fast!")
        const newHeros = [...cart];
        newHeros.splice(4, 1);
        setCart(newHeros);
    }

    /* Remove individually item from cart */
    const removeFromCart = (id) => {
        const newList = cart.filter((item) => item.id !== id);
        setCart(newList);
    };

    /* Remove all item from cart */
    const clearCart = () => {
        const newList = [];
        setCart(newList);
        setRandom([]);
    };
    /* Show random items */
    const chooseRandom = () => {
        const random = cart[Math.floor(Math.random() * cart.length)];
        setRandom(random);
        // console.log(random)
    }

    return (
        <div className='shop-container'>

            <div className='products-container reverse-main'>
                {
                    products.map(product => <Product key={product.id} showProducts={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} chooseRandom={chooseRandom} random={random}></Cart>
            </div>

        </div>
    );
};



export default Shop;