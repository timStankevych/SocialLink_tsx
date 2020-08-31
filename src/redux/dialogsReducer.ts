import {ActionTypes, DialogPageType, MessageType} from './state';

const AddMessage = 'ADD-MESSAGE';
const UpdateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state: DialogPageType, action: ActionTypes) => {
    switch (action.type) {
        case AddMessage:
            let newMessage: MessageType = {
                id: 5,
                message: action.newMessageText,
            }

            state.messages.push(newMessage);
            state.newMessageText = '';
            return state
        case UpdateNewMessageText:
            state.newMessageText = action.newMessage;
            return state
        default:
            return state
    }
}

export default dialogsReducer