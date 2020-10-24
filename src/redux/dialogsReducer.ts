import {ActionTypes, DialogPageType} from './redux-store';

export type DialogPageActionTypes = ReturnType<typeof sendMessageAC>

const SendMessage = 'SEND-MESSAGE';

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
};

const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case SendMessage: {
            let Message = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: Message}],
            };
        }
        default:
            return state;
    }
};

export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: SendMessage, newMessageBody
    } as const;
};

export default dialogsReducer;