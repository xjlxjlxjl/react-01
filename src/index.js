import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './c.css';
import App from './App';
import C from './c';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<C />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
