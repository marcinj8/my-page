import React from 'react';

import './AboutMe.css';

const skillsReact = ['react', 'axios', 'google firebase'];
const skills = ['git', 'JavaScript', 'HTML5', 'css/scss', 'BEM metodologia', 'RWD', 'komunikacja z API']

const aboutMe = props => {

    return (
        <section className='aboutMe__container' id='o mnie' >
            <h2>
                o mnie
            </h2>
            <div className='aboutMe__flexBox'>
                <article className='aboutMe__info'>
                    
                </article>
                <article className='aboutMe__skills'>
                    Podstawy moich projektów: {skillsReact}
                    Dodatkowo używam : {skillsReact}
                </article>
            </div>
            <button 
                onClick={() => console.log('show cv')}
                className='aboutMe__button'
                type="">CV</button>
        </section>
    )
}

export default aboutMe;