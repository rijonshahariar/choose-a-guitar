import React from 'react';

import './RandomItem.css'

const RandomItem = ({ random }) => {
    const { name, picture } = random;
    return (
        <div>
            <h4>Random Selection</h4>
            <h4 className='random-info'>
                <span>
                    <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={picture} alt="" />
                </span>
                {name}
            </h4>
        </div>
    );
};

export default RandomItem;