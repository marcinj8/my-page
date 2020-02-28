import React from 'react';

import NavigationList from './NavigationList';

import './Navigation.css';

const navigation = props => {
    
    const navigationStyle = [
        'navigation__container',
        props.stickyNavigation
            ? 'navigation__container--setSticky'
            : 'navigation__container--relaseSticky'
    ]
    return (
            <nav
                className={navigationStyle.join(' ')}>
                <NavigationList
                    setNavbarItemActive={props.setNavbarItemActive} />
            </nav>
    )
}

export default navigation;