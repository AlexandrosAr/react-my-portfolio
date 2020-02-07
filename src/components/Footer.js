import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css'

import github from '../imgs/github.png';
import codepen from '../imgs/codepen.png';
import githubHover from '../imgs/github-hover.png';
import codepenHover from '../imgs/codepen-hover.png';



export class Footer extends React.Component {
    constructor(props) {
        super(props);
        const imgLinkMap = new Map([['github', github], ['codepen', codepen], ['githubHover', githubHover], ['codepenHover', codepenHover]])
        this.state = {
            github: github,
            codepen: codepen,
            imgLinkMap: imgLinkMap
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver(e) {
        const value = this.state.imgLinkMap.get(e.target.id + 'Hover');
        this.setState({
            [e.target.id] : value
        });
    }

    handleMouseOut(e) {
        const value = this.state.imgLinkMap.get(e.target.id);
        this.setState({
            [e.target.id] : value
        });
    }


    render() {
        const d = new Date();
        const date =  d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
        const gitDynamicLink = 'https://github.com/AlexandrosAr';
        const codepenDynamicLink = 'https://codepen.io/AlexAr';

        
        return (
            <div id='footer-container'>
                <div>&copy;Developed by Alexandros Arapidis, React.js, {date} </div>
                <div className='footer-social-media-container'>
                    <a href={gitDynamicLink} target='_blank' rel='noopener noreferrer'>
                        <img id='github' className='social-media-img' src={this.state.github} alt='linkedin btn' height='20px' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}></img>
                    </a>
                    <a href={codepenDynamicLink} target='_blank' rel='noopener noreferrer'>
                        <img id='codepen' className='social-media-img button' src={this.state.codepen} alt='facebook btn' height='20px' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}></img>
                    </a>
                </div>

            </div>
        );
    }

}

export default Footer;

