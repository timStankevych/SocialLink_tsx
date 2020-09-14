import React from 'react';
import {DispatchType, RootStateType} from '../../redux/redux-store';
import {followAC, setUsersAC, unFollowAC, UsersType} from '../../redux/usersReducer';
import {connect} from 'react-redux';
import Users from './Users';

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    };
};

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)