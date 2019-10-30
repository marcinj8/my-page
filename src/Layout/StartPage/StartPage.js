import React from 'react';

import './StartPage.css';
import cloud from '../../Assets/cloud2.png'

const startPage = props => {

    const backgroundSytle = ['startPage__containerBg']
    if (props.mounted) {
        backgroundSytle.push('animation');
    }

    return (
        <div className='startPage__container' id='start'>
            <div className={backgroundSytle.join(' ')}>
            </div>
            {/* <img src={cloud} alt="" className='startPage__animatedCloud' /> */}
            {/* <div className='startPage__containerBg animation'></div> */}

        </div>
    )
}

export default startPage;