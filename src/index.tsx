import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import React from 'react';
import store from './redux/state';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <HashRouter>
            <App store={store} />
        </HashRouter>, document.getElementById('root'));
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);