import React from 'react';
import {sendMessageAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {DispatchType, RootStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};
let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody));
        },
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

