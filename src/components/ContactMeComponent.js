import React, {Component} from 'react';
import './ContactMeComponent.css';
import axios from 'axios';

class ContactMeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            captcha: '',
            apiUrl: 'http://localhost:5000',
            captchaNums: {
                num1: '',
                num2: ''
            }
        };

        this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
        this.onNameFieldChange = this.onNameFieldChange.bind(this);
        this.onEmailFieldChange = this.onEmailFieldChange.bind(this);
        this.onSubjectFieldChange = this.onSubjectFieldChange.bind(this);
        this.onMessageFieldChange = this.onMessageFieldChange.bind(this);
        this.onCaptchaFieldChange = this.onCaptchaFieldChange.bind(this);
        this.getCaptchaNums = this.getCaptchaNums.bind(this);
        this.getCaptchaNums();
    }

    async getCaptchaNums() {
        const captchaNumbers = await axios.post(`${this.state.apiUrl}/get-captcha-numbers`);
        this.setState({
            captchaNums: {
                num1: captchaNumbers.data.num1,
                num2: captchaNumbers.data.num2
            }
        });
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            captcha: ''
        });
    }

    async handleSubmitMessage(event) {
        event.preventDefault();

        const {name, email, subject, message, captcha} = this.state;

        try {
            const res = await axios.post(`${this.state.apiUrl}/send-mail`,{
                name,
                email,
                subject,
                message,
                captcha
            });
            console.log(res)
        } catch (err) {
            console.log('Error: ', err)
        }
        console.log(this.state);
    }

    onNameFieldChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    onEmailFieldChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    onSubjectFieldChange(event) {
        this.setState({
            subject: event.target.value
        });
    }

    onMessageFieldChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    onCaptchaFieldChange(event) {
        this.setState({
            captcha: event.target.value
        });
    }


    render() { 
        const captchaLabel = `${this.state.captchaNums.num1} + ${this.state.captchaNums.num2} = `; 
       return (
           <form id='contact-form' onSubmit={this.handleSubmitMessage} method='POST'>
               <div className='form-field'>
                    <input className='input-field box-shadow' id='name-input-field' type='text' value={this.state.name} onChange={this.onNameFieldChange} placeholder='Name' required/>
               </div>
               <div className='form-field'>
                    <input className='input-field box-shadow' id='email-input-field' type='text' value={this.state.email} onChange={this.onEmailFieldChange} placeholder='Email Address' required/>
               </div>
               <div className='form-field'>
                   <input className='input-field box-shadow' id='subject-input-field' type='text' value={this.state.subject} onChange={this.onSubjectFieldChange} placeholder='Subject' required/>
               </div>
               <div className='form-field'>
                   <textarea className='input-field box-shadow' id='message-input-field' value={this.state.message} onChange={this.onMessageFieldChange} placeholder='Type your message here' required rows='7'/>
               </div>
               <div id='submit-form' >
                   <div>
                        {captchaLabel}
                        <input id='captcha-field' className='box-shadow' type='text' value={this.state.captcha} onChange={this.onCaptchaFieldChange} required minLength="1" maxLength='2' size='3' />
                   </div>
                    
                    <button type='submit' className='btn'>Submit</button>
               </div>
           </form>
       );
    }
}

export default ContactMeComponent;