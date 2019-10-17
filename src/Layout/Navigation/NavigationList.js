import React from 'react';

import NavitaionItem from './NavigationItem';

import navigationData from './Navigation.json';

import './NavigationList.css';

const navigationList = props => {

    const navigationList = navigationData.map( item => {
        return (
            <NavitaionItem 
                key={item.id}
                name={item.id}
                isActive={item.active}/>
        )
    });

    return (
        <div className='navigationList'>
            {navigationList}
        </div>
    )
}

export default navigationList;