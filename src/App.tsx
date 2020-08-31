import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom'
import store, {ActionTypes, StoreType} from './redux/state';

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={'/profile'} render={() => <Profile
                    profilePage={props.store._state.profilePage}
                    dispatch={props.store.dispatch.bind(store)}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogsPage={props.store._state.dialogsPage}
                    dispatch={props.store.dispatch.bind(store)}/>}/>
            </div>
        </div>
    )
}


export default App;
