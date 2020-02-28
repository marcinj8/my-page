import React from 'react';

import './Backdrop.css';

const backdrop = props => {

    const backdropStyle = ['backdrop',
        props.show
            ? 'show'
            : null
    ];

    return (
        <div
            onClick={props.hideBackdrop}
            className={backdropStyle.join(' ')}>
            {props.children}
        </div >
    );
}

export default backdrop;