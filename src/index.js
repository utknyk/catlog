import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import {mainReducer} from './reducers';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();
const store = createStore(mainReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
