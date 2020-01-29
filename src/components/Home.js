import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css'
import logo from '../imgs/profile_pic.jpg'

export class Home extends Component {

    render() {

        /* Calculates my Age in Years */
        let birthdate = new Date('7/7/1990');
        let d = new Date();
        let currentDate = new Date(d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate());
        let dynamicAge = parseInt(Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(birthdate.getFullYear(), birthdate.getMonth(), birthdate.getDate())) / (1000 * 60 * 60 * 24 * 365)), 10);

        return (
            <div id='home-container'>
                <div id='inside-square'>
                    <div id='img-title-container'>
                        <img className='custom-img' src={logo} alt='website logo' height='240' width='240' ></img>
                        <div id='custom-title'>
                            <h1>Alexandros Arapidis</h1>
                            <p>Software Engineer</p>
                        </div>
                    </div>

                    <div id='introduction-container'>
                        <p>Hi guys! Welcome to my personal portfolio!</p>
                        <p>My name is Alex, I am {dynamicAge} years old and I am a passionate developer who seeks always to improve himself.</p>
                        <p>This is my first attempt to develop a portfolio.</p>
                        <p>Feel free to get in touch with me.</p>
                        <p>Thank you!</p>
                    </div>
                </div>

            </div>
        );
    }

}

export default Home;
