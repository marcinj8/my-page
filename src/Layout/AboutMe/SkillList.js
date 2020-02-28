import React from 'react';

import './SkillList.css';

const skillList = props => {

    const renderList = props.skills.map((item, index) => {

        let itemAnimation = {
            transitionDelay: index * .2 + .8 + 's',
            transform: 'translateY(-100%)',
            opacity: 0,
        }

        let checkAnimation = {
            transitionDelay: index / 3 * 2 + 2.8 + 's',
            width: 0,
        }

        if (props.show) {
            itemAnimation.opacity = 1;
            itemAnimation.transform = 'translateY(0)';
            checkAnimation.width = '20px';
        }
        return (
            <li
                key={index}
                className='skillList__item'
                style={{ ...itemAnimation }}
            >
                {item} <span className='skillList__checkedContainer'>
                    <span
                        style={{ ...checkAnimation }}
                        className='skillList__checked'
                    ></span></span>
            </li>
        )
    })

    return (
        <ul
            className='skillList__container'>
            {renderList}
        </ul>
    )
}

export default skillList;