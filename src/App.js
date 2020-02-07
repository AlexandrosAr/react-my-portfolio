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
                <Navbar className='custom-navbar' id='portfolio-navbar' expand='false' onToggle={this.onExpandNavBar} expanded={this.state.navExpanded}>
                    <Navbar.Toggle className='navbar-dark' aria-controls='navbar-toggle' />
                    <Navbar.Brand id='custom-navbrand'><img className='custom-img' src={logo} alt='website logo' height='60' width='60' /></Navbar.Brand>


                    <Navbar.Collapse id='navbar-toggle'>
                        <Nav id='nav-container-custom'>
                            <Link className='nav-link' onClick={this.closeNav} to='/'>Home</Link>
                            <Link className='nav-link' onClick={this.closeNav} to='/About'>About me</Link>
                            <Link className='nav-link' onClick={this.closeNav} to='/contact'>Contact me</Link>

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