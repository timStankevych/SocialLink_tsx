import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {DispatchType, RootStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    };
};
let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        updateNewMessageText: (newMessage: string) => {dispatch(updateNewMessageTextAC(newMessage))},
        sendMessage: (newMessageText: string) => {dispatch(addMessageAC(newMessageText))},
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;