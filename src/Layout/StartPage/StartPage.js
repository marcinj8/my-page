import React from 'react';

import './StartPage.css';

const startPage = props => {

    const backgroundSytle = ['startPage__containerBg']
    if (props.mounted) {
        backgroundSytle.push('animation');
        console.log('animation')
    }

    return (
        <div className='startPage__container'>
            <div className={backgroundSytle.join(' ')}></div>
            {/* <div className='startPage__containerBg animation'></div> */}
            
        </div>
    )
}

export default startPage;