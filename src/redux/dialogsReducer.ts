import {ActionTypes, DialogPageType} from './redux-store';

export type DialogPageActionTypes = ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

const AddMessage = 'ADD-MESSAGE';
const UpdateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Tim'},
        {id: 2, name: 'Mary'},
        {id: 3, name: 'Fima'},
        {id: 4, name: 'Yan'},
        {id: 5, name: 'Vovan'},
        {id: 6, name: 'Dimych'},
    ],
    messages: [
        {id: 1, message: 'Tim привет, а вот и мы'},
        {id: 2, message: 'Mary привет, а вот и мы'},
    ],
    newMessageText: '',
};

const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case AddMessage: {
            let Message = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: Message}],
            };
        }
        case UpdateNewMessageText: {
            return {
                ...state,
                newMessageText: action.newMessage
            };
        }
        default:
            return state;
    }
};

export const addMessageAC = (newMessageText: string) => {
    return {
        type: 'ADD-MESSAGE', newMessageText: newMessageText
    } as const;
};

export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage
    } as const;
};
export default dialogsReducer;