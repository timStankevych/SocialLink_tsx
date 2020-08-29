import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom'
import {addMessage, addPost, RootStateType} from './redux/state';

type PropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    addMessage: (postMessage: string) => void
    updateNewPostsText: (newText: string) => void
    updateNewMessageText: (newMessage: string) => void
}

const App: React.FC<PropsType> = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={'/profile'} render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={addPost}
                    updateNewPostsText={props.updateNewPostsText}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogsPage={props.state.dialogsPage}
                    addMessage={addMessage}
                    updateNewMessageText={props.updateNewMessageText}/>}/>
            </div>
        </div>
    )
}


export default App;
