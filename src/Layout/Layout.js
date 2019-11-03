import React, { Component } from 'react';

import Navigation from './Navigation/Navigation';
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
        offerAnimation: false,
        aboutMeAnimation: false,
        contactFormAnimation: false
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

    runAnimation = (position) => {
        const offer = document.getElementsByClassName('offer__container')[0].offsetTop;
        const aboutMe = document.getElementsByClassName('aboutMe__container')[0].offsetTop;
        const contactFrom = document.getElementsByClassName('contactForm__container')[0].offsetTop;

        switch (true) {
            case (contactFrom < position):
                this.setState({ contactFormAnimation: true });
                break;
            case (aboutMe < position):
                this.setState({ aboutMeAnimation: true });
                break;
            case (offer < position):
                this.setState({ offerAnimation: true });
                break;
            default: return null
        }
    }

    handleScroll = () => {
        const currentPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const scrollPositionForAnimation = currentPosition + Math.round(windowHeight * .8);
        // const previousPosition = this.state.scrollPosition;
        const setNavbarSticky = currentPosition > 120;
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
                <Navigation
                    navigationData={this.state.navigation}
                    stickyNavigation={this.state.navigationSticky}
                    setNavbarItemActive={this.setNavbarItemActive} />
                <StartPage
                    mounted={this.state.mounted} />
                <Offer
                    showAnimation={this.state.offerAnimation} />
                <AboutMe
                    showAnimation={this.state.aboutMeAnimation} />
                <ContactForm
                    showAnimation={this.state.contactFormAnimation} />
            </div>
        )
    }
}

export default Layout;