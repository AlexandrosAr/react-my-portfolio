import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import './App.css';
import logo from './imgs/A2UpdatedGreen.png'

import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

/* Create a library of fonts to use it in my components */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faHome, faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faCheckSquare, faCoffee, faHome);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navExpanded: false
        };

        this.onExpandNavBar = this.onExpandNavBar.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    onExpandNavBar(e) {
        this.setState({ navExpanded: e });
    }

    closeNav() {
        this.setState({ navExpanded: false });
    }


    render() {

        return (
            <Router className='page-container'>
                <Navbar className='custom-navbar' expand='false' onToggle={this.onExpandNavBar} expanded={this.state.navExpanded}>
                    <Navbar.Brand className='custom-navbrand'><img className='custom-img' src={logo} alt='website logo' height='60' width='60' /></Navbar.Brand>

                    <Navbar.Toggle className='navbar-dark' aria-controls='navbar-toggle' />
                    <Navbar.Collapse id='navbar-toggle'>
                        <Nav id='nav-container-custom'>
                            <Link className='nav-link' onClick={this.closeNav} to='/'>Home</Link>
                            <Link className='nav-link' onClick={this.closeNav} to='/About'>About</Link>
                            <Link className='nav-link' onClick={this.closeNav} to='/contact'>Contact</Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About} />
                </Switch>
                <Footer />

            </Router>
        );
    }

}

export default App;

/* <div id='index-container'>
                <div id='index-nav-container'>
                    <Navigation />
                </div>
                <div id='index-body-container'>
                    <Home />
                </div>
                <div id='index-footer-container'>
                    <Footer />
                </div>
            </div> */