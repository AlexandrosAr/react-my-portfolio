import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Contact.css';
import ContactMeComponent from './ContactMeComponent'

import  linkedin from '../imgs/social-media-png/linkedin.png';
import facebook from '../imgs/social-media-png/facebook.png';
import instagram from '../imgs/social-media-png/instagram.png';
import whatsapp from '../imgs/social-media-png/whatsapp.png';
import twitter from '../imgs/social-media-png/twitter.png';


import linkedinHover from '../imgs/social-media-png/linkedin-hover.png';
import facebookHover from '../imgs/social-media-png/facebook-hover.png';
import instagramHover from '../imgs/social-media-png/instagram-hover.png';
import whatsappHover from '../imgs/social-media-png/whatsapp-hover.png';
import twitterHover from '../imgs/social-media-png/twitter-hover.png';



class Contact extends Component {

    constructor(props) {
        super(props);

        const socialMediaIconMap = new Map([['linkedin', linkedin], ['facebook', facebook], ['instagram', instagram], ['whatsapp', whatsapp], ['twitter', twitter], ['linkedinHover', linkedinHover], ['facebookHover', facebookHover], ['instagramHover', instagramHover], ['whatsappHover', whatsappHover] , ['twitterHover', twitterHover]]);

        this.state = {
            linkedin: linkedin,
            facebook: facebook,
            instagram: instagram,
            whatsapp: whatsapp,
            twitter: twitter,
            linkMap : socialMediaIconMap
        }   
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver(e) {
        const value = this.state.linkMap.get(e.target.id + 'Hover');
        this.setState({
            [e.target.id] : value
        });
    }

    handleMouseOut(e) {
        const value = this.state.linkMap.get(e.target.id);
        this.setState({
            [e.target.id] : value
        });
    }

    render() {

        const fbDynamicLink = 'https://www.facebook.com/alexandros.arapidis';
        const liDynamicLink = 'https://www.linkedin.com/in/alexandros-arapidis';
        const inDynamicLink = 'https://www.instagram.com/alexandrosarapidis/';
        const whDynamicLink = 'https://we.me/';
        const twDynamicLink = 'https://twitter.com/Kozer07';

        return (
            <div id='page-container'>
                <div id='inside-square'>
                    <div id='title'>
                        Contact Me!
                        <p>I'll be glad to answer your questions!</p>
                    </div>
                    <ContactMeComponent />
                    
                    <div className='social-media-container'>
                        <a href={liDynamicLink} target='_blank' rel='noopener noreferrer'>
                            <img id='linkedin' className='social-media-img linkedin' src={this.state.linkedin} alt='linkedin btn' height='50px' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} ></img>
                        </a>
                        <a href={fbDynamicLink} target='_blank' rel='noopener noreferrer'>
                            <img id='facebook' className='social-media-img button' src={this.state.facebook} alt='facebook btn' height='50px' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} ></img>
                        </a>
                        <a href={inDynamicLink} target='_blank' rel='noopener noreferrer'>
                            <img id='instagram' className='social-media-img button' src={this.state.instagram} alt='facebook btn' height='50px' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} ></img>
                        </a>
                        <a href={whDynamicLink} target='_blank' rel='noopener noreferrer'>
                            <img id='whatsapp' className='social-media-img button' src={this.state.whatsapp} alt='facebook btn' height='50px' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} ></img>
                        </a>
                        <a href={twDynamicLink} target='_blank' rel='noopener noreferrer'>
                            <img id='twitter' className='social-media-img button' src={this.state.twitter} alt='facebook btn' height='50px' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} ></img>
                        </a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;