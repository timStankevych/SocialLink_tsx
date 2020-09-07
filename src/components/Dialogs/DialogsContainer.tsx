import React from 'react';
import {StoreType} from '../../redux/store';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

type PropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<PropsType> = (props) => {

    let state = props.store.getState().dialogsPage

    let addMessage = (newMessageText: string) => {
                props.store.dispatch(addMessageAC(newMessageText))
    }

    let onMessageChange = (newMessage: string) => {
        props.store.dispatch(updateNewMessageTextAC(newMessage))
    }

    return <Dialogs dialogsPage={state} updateNewMessageText={onMessageChange} sendMessage={addMessage}/>

}


export default DialogsContainer