import React, { Component } from 'react';

import Navigation from './Navigation/Navigation';
import Sidebar from './Navigation/Sidebar';
import StartPage from './StartPage/StartPage';
import Offer from './Offer/Offer';
import AboutMe from './AboutMe/AboutMe';
import ContactForm from './Contact/ContactForm';

import navigationDataJSON from './Navigation/Navigation.json';

import './Layout.css';

class Layout extends Component {
    state = {
        mounted: false,
        navigation: [],
        scrollPosition: 0,
        pageLoadedData: 0,
        isDateSet: false,
        navigationSticky: false,
        animation: {
            offerAnimation: false,
            aboutMeAnimation: false,
            aboutMeSkillsAnimation: false,
            aboutMeCVButtonAnimation: false,
            contactFormAnimation: false,
        },
        showSidebar: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setUpNavigation();
        this.mounted();
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    setUpNavigation = () => {
        const navigationState = navigationDataJSON;

        this.setState({
            navigation: navigationState
        })
    }

    setStartDate = () => {
        const dateObj = new Date()
        const currentDate = dateObj.getTime();

        this.setState({
            pageLoadedData: currentDate
        })
    }

    mounted = () => {
        this.setState({ mounted: true })
    };

    setNavbarItemActive = id => {
        const updatedNavigatonData = [...this.state.navigation];
        const indexOfActiveOverlap = updatedNavigatonData.findIndex(item => item.id === id);
        updatedNavigatonData.map(item => item.active = false);
        updatedNavigatonData[indexOfActiveOverlap].active = true;

        this.setState({
            navigation: updatedNavigatonData
        })
    }

    sidebarToggler = () => {
        this.setState({
            showSidebar: !this.state.showSidebar
        })
    }

    setAnimationToTrue = property => {
        const animation = { ...this.state.animation };
        animation[property] = true;

        this.setState({
            animation: animation
        })
    }

    runAnimation = (position) => {
        const offer = document.getElementsByClassName('offer__container')[0].offsetTop;
        const aboutMe = document.getElementsByClassName('aboutMe__info')[0].offsetTop + 200;
        const aboutMeSkills = document.getElementsByClassName('aboutMe__skills')[0].offsetTop + 300;
        const aboutMeCVButton = document.getElementsByClassName('aboutMe__button--cv')[0].offsetTop + 300;
        const contactFrom = document.getElementsByClassName('contactForm__container')[0].offsetTop - 200;
        
        switch (true) {
            case (contactFrom < position):
                this.setAnimationToTrue('contactFormAnimation')
            case (aboutMeCVButton < position):
                this.setAnimationToTrue('aboutMeCVButtonAnimation')
            case (aboutMeSkills < position):
                this.setAnimationToTrue('aboutMeSkillsAnimation')
            case (aboutMe < position):
                this.setAnimationToTrue('aboutMeAnimation')
            case (offer < position):
                this.setAnimationToTrue('offerAnimation')
                break;
            default: return null
        }
    }

    handleScroll = () => {
        const currentPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const scrollPositionForAnimation = currentPosition + Math.round(windowHeight * .2);
        // const previousPosition = this.state.scrollPosition;
        const setNavbarSticky = currentPosition > 20;
        this.setState({
            scrollPosition: currentPosition,
            scrollPositionForAnimation: scrollPositionForAnimation,
            navigationSticky: setNavbarSticky
        })
        this.runAnimation(scrollPositionForAnimation);
    }

    render() {
        return (
            <div className='mainContainer'>
                <button
                    onClick={this.sidebarToggler}
                    className='menu__toggler'>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <Navigation
                    navigationData={this.state.navigation}
                    stickyNavigation={this.state.navigationSticky}
                    setNavbarItemActive={this.setNavbarItemActive} />
                <Sidebar
                    hideSidebar={this.sidebarToggler}
                    showSidebar={this.state.showSidebar}
                    navigationData={this.state.navigation}
                    stickyNavigation={this.state.navigationSticky}
                    setNavbarItemActive={this.setNavbarItemActive} />
                <StartPage
                    mounted={this.state.mounted} />
                <AboutMe
                    showAnimation={this.state.animation.aboutMeAnimation}
                    showSkillsAnimation={this.state.animation.aboutMeSkillsAnimation}
                    CVButtonAnimation={this.state.animation.aboutMeCVButtonAnimation} />
                <Offer
                    showAnimation={this.state.animation.offerAnimation} />
                <ContactForm
                    showAnimation={this.state.animation.contactFormAnimation} />
            </div>
        )
    }
}

export default Layout;