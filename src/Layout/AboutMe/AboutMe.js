import React from 'react';

import SkillList from './SkillList';

import './AboutMe.css';

const skillsReact = ['react', 'redux', 'axios', 'google firebase', 'reużywalne komponenty'];
const skills = ['git', 'JavaScript', 'HTML5', 'css/scss', 'metodologia BEM', 'RWD', 'komunikacja z API']

const aboutMe = props => {

    const aboutMeInfoStyle = ['aboutMe__info'];
    const aboutMeSkillsStyle = ['aboutMe__skills'];
    const CVButtonAnimation = ['aboutMe__button--cv'];

    if (props.showAnimation) {
        aboutMeInfoStyle.push('aboutMe__info--show');
    }
    if (props.showSkillsAnimation) {
        aboutMeSkillsStyle.push('aboutMe__skills--show');
    }
    if (props.CVButtonAnimation) {
        CVButtonAnimation.push('aboutMe__button--show');
    }

    const reactSkillsList = <SkillList
        skills={skillsReact}
        show={props.showSkillsAnimation} />;
    const skillsList = <SkillList
        skills={skills}
        show={props.showSkillsAnimation} />;

    return (
        <section className='aboutMe__container' id='o mnie' >
            <h2>
                o mnie
            </h2>
            <div className='aboutMe__flexBox'>
                <article className={aboutMeInfoStyle.join(' ')}>
                    Przygodę z programowaniem zacząłem od kursu Przygodę
                    z programowaniem zacząłem od kursu Przygodę z programowaniem zacząłem
                    od kursu Przygodę z programowaniem zacząłem od kursu Przygodę z programowaniem
                    zacząłem od kursu Przygodę z programowaniem zacząłem od kursu Przygodę z
                    programowaniem zacząłem od kursu Przygodę z programowaniem zacząłem od kursu
                    Przygodę z programowaniem zacząłem od kursu Przygodę z programowaniem zacząłem o
                    d kursu Przygodę z programowaniem zacząłem od kursu Przygodę Przygodę z
                    programowaniem zacząłem od kursu
                    Przygodę z programowaniem zacząłem od kursu
                </article>
                <article className={aboutMeSkillsStyle.join(' ')}>
                    <span>
                        Podstawy moich projektów: {reactSkillsList}
                    </span>
                    <span>
                        Dodatkowo używam: {skillsList}
                    </span>

                </article>
            </div>
            <button
                onClick={() => console.log('show cv')}
                className={CVButtonAnimation.join(' ')}
                type="">CV</button>
        </section>
    )
}

export default aboutMe;