import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import {compose} from 'redux';
import thunk from 'redux-thunk';
import sample from './middlewares/sample';
import sample_2 from './middlewares/sample_2';
import { combineReducers } from 'redux';



const store = createStore(
    combineReducers({auth:reducers}),
    {},
    compose(applyMiddleware(sample,sample_2,thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
    
  )
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
