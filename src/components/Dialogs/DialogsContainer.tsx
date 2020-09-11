import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {RootStateType} from '../../redux/store';
import {connect} from 'react-redux';

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    };
};
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageText: (newMessage: string) => {dispatch(updateNewMessageTextAC(newMessage))},
        sendMessage: (newMessageText: string) => {dispatch(addMessageAC(newMessageText))},
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;