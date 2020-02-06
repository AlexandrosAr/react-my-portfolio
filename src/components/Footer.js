import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css'
import  linkedin from '../imgs/socialMediaLogos/png/027-linkedin.png';
import facebook from '../imgs/036-facebook-footer.png';



export class Footer extends React.Component {

    render() {
        let d = new Date();
        let date =  d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
        let fbDynamicLink = 'https://www.facebook.com/alexandros.arapidis';
        let liDynamicLink = 'https://www.linkedin.com/in/alexandros-arapidis';
        
        return (
            <div id='footer-container'>
                <div>&copy;Developed by Alexandros Arapidis, React.js, {date} </div>
                <div className='footer-social-media-container'>
                    <a href={liDynamicLink} target='_blank' rel='noopener noreferrer'>
                        <img className='social-media-img' src={linkedin} alt='linkedin btn' height='20px' ></img>
                    </a>
                    <a href={fbDynamicLink} target='_blank' rel='noopener noreferrer'>
                        <img className='social-media-img button' src={facebook} alt='facebook btn' height='20px' ></img>
                    </a>
                </div>

            </div>
        );
    }

}

export default Footer;

