import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './About.css';

import profileLogo from '../imgs/photoAArapidis.jpg'

class About extends Component {
    render() {
        return (
            <div id='about-container'>
                <div><img src={profileLogo} alt='Myself' height='60' width='60' /></div>
                <div>This is the About Page</div>
            </div>
        )
    }
}

export default About;