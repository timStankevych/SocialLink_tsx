import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer: React.FC = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {

            let state = store.getState().dialogsPage

            let addMessage = (newMessageText: string) => {
                store.dispatch(addMessageAC(newMessageText))
            }

            let onMessageChange = (newMessage: string) => {
                store.dispatch(updateNewMessageTextAC(newMessage))
            }

            return (
                <Dialogs dialogsPage={state}
                         updateNewMessageText={onMessageChange}
                         sendMessage={addMessage}/>
            )
        }}
        </StoreContext.Consumer>)

}


export default DialogsContainer