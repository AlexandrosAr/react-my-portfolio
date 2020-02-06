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
            captcha: ''
        };

        this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
        this.onNameFieldChange = this.onNameFieldChange.bind(this);
        this.onEmailFieldChange = this.onEmailFieldChange.bind(this);
        this.onSubjectFieldChange = this.onSubjectFieldChange.bind(this);
        this.onMessageFieldChange = this.onMessageFieldChange.bind(this);
        this.onCaptchaFieldChange = this.onCaptchaFieldChange.bind(this);
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

        await axios.post('/api/form',{
            name,
            email,
            subject,
            message,
            captcha
        });
       /*  fetch('http://localhost:3002/send',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ).then(
            (response) => (response.json())
        ).then((response) => {
            if(response.status === 'success') {
                alert('Message was sent');
                this.resetForm()
            } else if(response.status === 'fail'){
                alert("Message failed to send.")
            }
        }); */
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
                   <textarea className='input-field box-shadow' id='message-input-field' value={this.state.message} onChange={this.onMessageFieldChange} placeholder='Type your message here' required rows='5'/>
               </div>
               <div id='submit-form' >
                    <input id='captcha-field' className='box-shadow' type='text' value={this.state.captcha} onChange={this.onCaptchaFieldChange} required minLength="1" maxLength="4" size='4' />
                    <button type='submit' className='btn'>Submit</button>
               </div>
           </form>
       );
    }
}

export default ContactMeComponent;