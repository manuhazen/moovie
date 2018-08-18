import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';


ReactDOM.render(
    <Router basename='/'>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
