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

export const addMessageAC = (newMessageText: string) => {
    return {
        type: 'ADD-MESSAGE', newMessageText: newMessageText
    } as const
};

export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage
    } as const
};
export default dialogsReducer