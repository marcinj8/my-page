import React, { Component } from 'react';

import Navigation from './Navigation/Navigation';
import StartPage from './StartPage/StartPage';
import Offer from './Offer/Offer';

import './Layout.css';

class Layout extends Component {
    state = {
        mounted: false,
        navigatoin: {

        },
        scrollPosition: 0,
        navigationSticky: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.mounted();
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {
        const currentPosition = window.pageYOffset;
        const previousPosition = this.state.scrollPosition;
        const setNavbarSticky = currentPosition > 120;
        console.log(currentPosition)
        this.setState({
            scrollPosition: currentPosition,
            navigationSticky: setNavbarSticky
        })
    }

    mounted = () => {
        this.setState({ mounted: true })
    };

    render() {
        console.log(this.state.navigationSticky)
        return (

            <div className='mainContainer'>
                <Navigation 
                    stickyNavigation={this.state.navigationSticky}/>
                <StartPage 
                    mounted={this.state.mounted}/>
                <Offer />
            </div>
        )
    }
}

export default Layout;