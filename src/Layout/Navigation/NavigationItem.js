import React from 'react';

import { Link } from "react-scroll";


import './NavigationItem.css';

const navigationItem = props => {
    return (
        <Link
            activeClass="navigationItem--active"
            to={props.name}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
        >
            <div 
                className='navigationItem'
                onClick={() => props.clicked(props.name)}>
                {props.name}
            </div>
        </Link>
    );
}

export default navigationItem;