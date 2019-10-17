import React from 'react';

import './NavigationItem.css';

const navigationItem = props => {
    return (
        <div className='navigationItem'>
            {props.name}
        </div>
    );
}

export default navigationItem;