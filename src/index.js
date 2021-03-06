import React from 'react';
import ReactDOM from 'react-dom';


import './horizontal-menu.css'
import './index.scss';
import App from './client/app'
import 'bootstrap/dist/js/bootstrap.js';

// import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';
import Popper from 'popper.js'
import { ApolloProvider } from 'react-apollo'
import * as serviceWorker from './serviceWorker';
import client from './client/apollo'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

ReactDOM.render(    
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
