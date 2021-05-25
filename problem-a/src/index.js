import React from 'react';
import ReactDOM from 'react-dom';

// (2)
import { App } from './App';

// (7)
import senators from './senators.json';

//render the App component here!
ReactDOM.render(<App senators={senators}/>, document.getElementById('root'));