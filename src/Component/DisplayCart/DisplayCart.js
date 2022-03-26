import React from 'react';

import { FiDelete } from 'react-icons/fi';
import './DisplayCart.css';

const DisplayCart = (props) => {
    const { removeFromCart } = props;
    const { name, picture, id } = props.showProducts;
    return (
        <div>
            <h4 className="product-info">
                <span>
                    <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={picture} alt="" />
                </span>
                {name}
                <FiDelete onClick={() => removeFromCart(id)} className='del-icon' />
            </h4>
        </div>
    );
};

export default DisplayCart;