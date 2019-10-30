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
        navigationSticky: false
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

    setNavbarItemActive = id => {
        const updatedNavigatonData = [...this.state.navigation];
        updatedNavigatonData.map(item => item.active = false);
        const indexOfActiveOverlap = updatedNavigatonData.findIndex(item => item.id === id);
        updatedNavigatonData[indexOfActiveOverlap].active = true;

        this.setState({
            navigation: updatedNavigatonData
        })
    }

    handleScroll = () => {
        const currentPosition = window.pageYOffset;
        // const previousPosition = this.state.scrollPosition;
        const setNavbarSticky = currentPosition > 120;
        this.setState({
            scrollPosition: currentPosition,
            navigationSticky: setNavbarSticky
        })
    }

    mounted = () => {
        this.setState({ mounted: true })
    };

    render() {
        return (
            
            <div className='mainContainer'>
                <Navigation
                    navigationData={this.state.navigation}
                    stickyNavigation={this.state.navigationSticky}
                    setNavbarItemActive={this.setNavbarItemActive} />
                <StartPage
                    mounted={this.state.mounted} />
                <Offer />
                <AboutMe />
                <ContactForm />
            </div>
        )
    }
}

export default Layout;