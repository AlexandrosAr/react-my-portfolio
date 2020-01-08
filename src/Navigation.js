import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navigation.css'
import logo from './a2png.png'

export class Navigation extends Component {

    render() {
        return (
            <nav id='display-nav' fixed='top'>
                <div>
                    <img src={logo} alt='website logo' height='50' width='50' />
                    <a href='/'>Home</a>
                </div>
                <ul>
                    <li><a href='/'>About me</a></li>
                    <li><a href='/'>Portfolio</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
            </nav>
        );
    }

}

export default Navigation;
