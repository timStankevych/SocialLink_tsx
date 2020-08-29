import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import state, {
    addMessage,
    addPost,
    updateNewPostsText,
    updateNewMessageText,
    subscribe
} from './redux/state';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 addMessage={addMessage}
                 updateNewPostsText={updateNewPostsText}
                 updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree();

subscribe(rerenderEntireTree);