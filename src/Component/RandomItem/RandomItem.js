import React from 'react';

import './RandomItem.css'

const RandomItem = ({ random }) => {
    const { name, picture } = random;
    return (
        name ? (<div>
            <h3>Best for You</h3>
            <h4 className='random-info'>
                <span>
                    <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={picture} alt="" />
                </span>
                {name}
            </h4>
        </div>) : <div></div>

    );
};

export default RandomItem;