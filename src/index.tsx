import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import React from 'react';
import store from './redux/redux-store';
import  {Provider} from './StoreContext';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </HashRouter>, document.getElementById('root'));
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);