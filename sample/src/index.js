import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App />);

root.render(
    <Provider store={store}> <App /> </Provider>
);


/*
import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App'; // user file path
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// component in upper case as App(component)
root.render(
    <App />
  
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
