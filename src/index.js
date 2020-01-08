import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Home from './Home';
import * as serviceWorker from './serviceWorker';

class Index extends Component {
    
    render() {
        return (
            <div id='index-container'>
                <div id='index-nav-container'>
                    <Navigation />
                </div>
                <div id='index-body-container'>
                    <Home />
                </div>
            </div>
        );
    }
    
}

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
