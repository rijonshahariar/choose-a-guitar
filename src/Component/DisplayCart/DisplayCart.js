import React from 'react';

import { TiDelete } from 'react-icons/ti';
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
                <TiDelete onClick={() => removeFromCart(id)} className='delete-icon' />
            </h4>
        </div>
    );
};

export default DisplayCart;