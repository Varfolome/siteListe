import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// index.css is a global style file


//We render a content of the page. App is the only one class that must be here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
