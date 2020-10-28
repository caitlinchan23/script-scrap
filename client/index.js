// importing dev tools to use react

import React from 'react';
import { render } from 'react-dom';
// connecting app to this index.js file
import styles from './style.scss';
import App from './App.jsx';

/* APP ENTRY POINT WHICH POINTS TO APP.JSX FOR FRONT END COMPONENTS */
render (
    <App />,
  document.getElementById('root')
);