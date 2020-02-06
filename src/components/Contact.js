import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Contact.css';
import ContactMeComponent from './ContactMeComponent'

class Contact extends Component {
    render() {
        return (
            <div id='page-container'>
                <div id='inside-square'>
                    <div id='title'>
                        Contact Me!
                        <p>I'll be glad to answer your questions!</p>
                        <ContactMeComponent />
                    </div>

                </div>

            </div>
        );
    }
}

export default Contact;