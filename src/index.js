import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App.js';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Atomic Age', 'cursive']
    }
  });

  

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
