import React, { Component } from 'react';
import { Link } from "react-scroll";

import './StartPage.css';

class StartPage extends Component {
    state = {
        header: {
            show: '',
            toWrite: 'Strona interntowa to Twoja',
            isWritten: false
        },
        startPageDynamicWords: {
            isStarted: false,
            wordsList: ['reklama', 'oferta', 'wizytówka'],
            currentWord: '',
            className: ['slideAndOpacity', 'slideVerticalAndOpacity', 'slideHorizontalAndOpacity', 'various'],
            currentClassName: ''
        },
        // counter: 0
    }
    componentDidMount() {
        this.animateHeader();
        // this.count()
    };

    componentDidUpdate() {
        if (this.state.header.isWritten) {
            if (this.state.startPageDynamicWords.currentWord === this.state.startPageDynamicWords.wordsList[this.state.startPageDynamicWords.wordsList.length - 1]) {
                this.startPageAnimation();
            }
            if (this.state.startPageDynamicWords.currentWord === '') {
                this.startPageAnimation();
            }
        }
        if (!this.state.header.isWritten) {
            this.animateHeader();
        }
    }
    // counter = (n) => {
    //     setTimeout(() => {
    //         console.log(n)
    //         const no = n;
    //         this.setState({
    //             counter: no
    //         })
    //     }, 200 * n/2)
    // }

    // count = () => {
    //     let count = 0;
    //     for (let i = 0; i <= 10; i++) {
    //         count = i;
    //         this.counter(i);
    //         console.log(count)
    //     }
    // }

    getRandomClass = () => {
        const availableClasses = [...this.state.startPageDynamicWords.className];
        const updatedCurrentClass = availableClasses[Math.round(Math.random() * (availableClasses.length - 1))];
        return updatedCurrentClass
    }

    changeStartPageWord = (obj, word) => {
        obj.currentWord = word;
        const chooseRandomClass = this.getRandomClass()
        obj.currentClassName = chooseRandomClass;
        this.setState({
            startPageDynamicWords: obj,
        })
    }

    startPageAnimation = () => {
        const startPageDynamicWordsUpdated = { ...this.state.startPageDynamicWords };
        const wordsList = [...startPageDynamicWordsUpdated.wordsList];

        for (let index in wordsList) {
            const word = this.state.startPageDynamicWords.wordsList[index]
            setTimeout(() => this.changeStartPageWord(startPageDynamicWordsUpdated, word), 5000 * index);
        };
    }


    writeHeader = (header, writeHeader) => {
        setTimeout(() => {
            header.push(writeHeader[0]);
            const updatedHeader = {};
            updatedHeader.show = header.join('');
            writeHeader.shift();
            updatedHeader.toWrite = writeHeader.join('');

            this.setState({
                header: updatedHeader
            });
        }, 100)
    }

    setIsWritenToTrue = () => {
        const headerObj = { ...this.state.header };
        headerObj.isWritten = true;
        this.setState({
            header: headerObj
        })
    }

    animateHeader = () => {
        let writeHeader = [...this.state.header.toWrite];
        let header = [...this.state.header.show];
        if (this.state.header.show === '') {
            header = [];
        }
        if (writeHeader.length >= 1) {
            this.writeHeader(header, writeHeader)
        } else if (this.state.header.toWrite.length === 0 && !this.state.header.isWritten) {
            this.setIsWritenToTrue();
        }
    }

    render() {
        const backgroundSytle = ['startPage__containerBg']
        const startPage__animation = ['startPage__dynamicWords ', this.state.startPageDynamicWords.currentClassName];
        const startPageButtonStyle = ['startPage__button']
        backgroundSytle.push('animation');
        if (this.state.header.isWritten) {
            startPageButtonStyle.push('startPage__button--animation')
        }

        return (
            <div className='startPage__container' id='start' >
                <div className={backgroundSytle.join(' ')}></div>
                <div className='startPage__grassBg'>

                </div>
                <h1 className='startPage__header'>{this.state.header.show}
                    <div className={startPage__animation.join(' ')}>{this.state.startPageDynamicWords.currentWord}</div>
                </h1>

                <Link
                    to={'oferta'}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    <button className={startPageButtonStyle.join(' ')}>Dowiedz się wiecej</button>
                </Link>

            </div>
        )
    }
}

export default StartPage;