import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';

import {rootReducer} from "../src/reducers/rootReducer";
import {createStore,applyMiddleware} from 'redux'

import {configureRouteForStore} from '../src/configs/routeConfig'
window.React = React


let store = createStore(rootReducer,applyMiddleware(thunk))
let routeConfig = configureRouteForStore(store)
ReactDOM.render(routeConfig, document.getElementById('root'));
registerServiceWorker();
