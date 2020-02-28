import React from 'react';

import NavigationList from './NavigationList';

import './Sidebar.css';
import Backdrop from '../../hoc/Backdrop';

const sidebar = props => {

    const navigationStyle = [
        'sidebar__container',
        props.showSidebar
            ? 'sidebar__container--open'
            : 'sidebar__container--close'
    ]
    return (
        <Backdrop
            hideBackdrop={props.hideSidebar}
            show={props.showSidebar}>
            <nav
                className={navigationStyle.join(' ')}>
                <NavigationList
                    setNavbarItemActive={props.setNavbarItemActive} />
            </nav>
        </Backdrop>
    )
}

export default sidebar;