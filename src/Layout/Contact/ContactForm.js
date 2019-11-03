import React, { Component } from 'react';

import FormElements from './FormElements';
import ContactData from './ContactData';
import checkValidation from './FormValidation';

import formConfig from './formConfig.json'
// import postCard from '../../Assets/sentMessage.png';

import './ContactForm.css';

class ContactForm extends Component {
    state = {
        emailData: {},
        emailValidation: {},
        placeholders: {},
        isSent: false,
        // showForm: false,
        disableSendButton: true
    };

    UNSAFE_componentWillMount() {
        this.setStateOnMount();
    }

    setStateOnMount = () => {
        const emailData = {};
        const emailValidation = {}
        const placeholders = {};

        formConfig.map(item => {
            emailData[item.id] = '';
            placeholders[item.id] = {};
            emailValidation[item.id] = {};
            placeholders[item.id].placeholder = {};
            placeholders[item.id].placeholder.end = item.placeholder.end;
            emailValidation[item.id].isValid = false;
            emailValidation[item.id].message = '';
            emailValidation[item.id].showMessage = false;
        })
        this.setState({
            emailData: emailData,
            emailValidation: emailValidation,
            placeholders: placeholders
        })
    }

    enableSendButton = conditionsObj => {
        const isValidArray = [];
        let enableButton = false;
        const emailValidationUpdated = { ...this.state.emailValidation }

        for (let key in conditionsObj) {
            isValidArray.push(conditionsObj[key].isValid);
        }

        for (let value of isValidArray) {
            if (value) {
                enableButton = true;
            } else {
                enableButton = false;
                break;
            }
        }

        this.setState({
            disableSendButton: !enableButton,
            showMessage: enableButton,
            emailValidation: emailValidationUpdated
        })
    }

    onInputChange = e => {
        const updatedEmailData = { ...this.state.emailData };
        const emailValidationUpdated = { ...this.state.emailValidation };
        const emailValidationIndex = formConfig.findIndex(item => item.placeholder.end === e.target.placeholder);
        updatedEmailData[e.target.placeholder] = e.target.value;

        if (formConfig[emailValidationIndex].validation) {
            emailValidationUpdated[e.target.placeholder] = checkValidation(e.target.value, formConfig[emailValidationIndex].validation);
        }
        this.enableSendButton(emailValidationUpdated);
        this.setState({
            emailData: updatedEmailData,
            emailValidation: emailValidationUpdated
        });
    };

    sendEmail = () => {
        this.setState({
            isSent: true
        })
    }

    render() {
        const contactFormStyle = [
            'contactForm__container',
            this.props.isActive
                ? 'contactForm__container--active'
                : 'contactForm__container--noActive',
        ];
        // const postCardStyle = [
        //     'contactForm__postCard',
        //     this.state.isSent
        //         ? 'contactForm__postCard--show'
        //         : null
        // ]

        const contactForm = (
            <div className={contactFormStyle.join(' ')}>
                <h4 className='contactForm__title'>Contact me</h4>
                <form className="contactForm__form">
                    <FormElements
                        formConfig={formConfig}
                        showForm={this.props.showAnimation}
                        placeholders={this.state.placeholders}
                        onChangeElement={this.onInputChange}
                        values={this.state.emailData}
                        emailValidation={this.state.emailValidation}
                    />
                </form>
                <button
                    disabled={this.state.disableSendButton}
                    className='contactForm__button'
                    onClick={this.sendEmail}>Send</button>
            </div>
        );

        const confirmation = (
            <div className={contactFormStyle.join(' ')}>
                <h4>
                    Thank you!
                </h4>
            </div>
        );


        return (
            <div className='contact__container' id='kontakt'>
                <ContactData />
                {/* <img alt='post card' src={postCard} className={postCardStyle.join(' ')} /> */}
                {
                    this.state.isSent
                        ? confirmation
                        : contactForm
                }
            </div>
        );
    }
}

export default ContactForm;
