import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(axiosMiddleware(axios)),
        applyMiddleware(thunk)
    ))

ReactDOM.render(<Provider store={store}>< App /></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
