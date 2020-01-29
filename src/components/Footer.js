import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css'



export class Footer extends React.Component {

    render() {
        let d = new Date();
        let date =  d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
        
        return (
            <div id='footer-container'>
                Developed by Alexandros Arapidis, React.js, {date}
            </div>
        );
    }

}

export default Footer;

