import React, { Component } from 'react';

import './StartPage.css';

class StartPage extends Component {
    state = {
        header: {
            show: '',
            toWrite: 'Strona interntowa to Twoja'
        },
        startPageDynamicWords: {
            wordsList: ['reklama', 'oferta', 'wizytówka'],
            currentWord: '',
            className: ['slideAndOpacity']
        },
    }
    componentDidMount() {
        this.startPageAnimation();
    };

    componentDidUpdate() {
        if (this.state.startPageDynamicWords.currentWord === this.state.startPageDynamicWords.wordsList[this.state.startPageDynamicWords.wordsList.length - 1]) {
            this.startPageAnimation();
        }

        this.animateHeader();

    }

    changeStartPageWord = (obj, word) => {
        obj.currentWord = word;
        this.setState({ startPageDynamicWords: obj })
    }

    startPageAnimation = () => {
        const startPageDynamicWordsUpdated = { ...this.state.startPageDynamicWords };
        const wordsList = [...startPageDynamicWordsUpdated.wordsList];

        for (let index in wordsList) {
            const word = this.state.startPageDynamicWords.wordsList[index]
            setTimeout(() => this.changeStartPageWord(startPageDynamicWordsUpdated, word), 5000 * index + 5000);
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
        }, 160)
    }

    animateHeader = () => {
        let writeHeader = [...this.state.header.toWrite];
        let header = [...this.state.header.show];
        if (this.state.header.end === '') {
            header = [];
        }
        if (writeHeader.length >= 1) {
            this.writeHeader(header, writeHeader)
        }
    }

    render() {
        const backgroundSytle = ['startPage__containerBg']
        const startPage__animation = this.state.startPageDynamicWords.className.join(' ');
        if (this.props.mounted) {
            backgroundSytle.push('animation');
        }

        return (
            <div className='startPage__container' id='start' >
                <div className={backgroundSytle.join(' ')}></div>
                <h1 className='startPage__header'>{this.state.header.show}
                    <div className={'startPage__dynamicWords ' + startPage__animation}>{this.state.startPageDynamicWords.currentWord}</div>
                </h1>
                {/* <img src={cloud} alt="" className='startPage__animatedCloud' /> */}

            </div>
        )
    }
}

export default StartPage;