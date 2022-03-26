import React from 'react';
import "./Product.css"
import { FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";

const Product = (props) => {
    const { showProducts, handleAddToCart } = props;
    const { name, picture, price, rate } = props.showProducts;

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h3 className='title'>{name}</h3>
            <p>Price: $ {price}</p>
            <p className='rating'>Rating: <FaStar className='star' /> {rate}</p>
            <button onClick={() => handleAddToCart(showProducts)} className='addToCart'><BsCartPlus className='cart-icon' /><p> Add To Cart</p></button>
        </div>
    );
};


export default Product;