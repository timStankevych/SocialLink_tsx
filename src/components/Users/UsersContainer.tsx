import React from 'react';
import {DispatchType, RootStateType} from '../../redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from '../../redux/usersReducer';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Users from './Users';

type PropsType = {
    users: Array<UsersType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    setUsers: (users: Array<UsersType>) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class UsersComponent extends React.Component<PropsType> {

    componentDidMount() {

        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            );
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                }
            );
    };

    render(): React.ReactNode {

        let pagesCount = this.props.totalUsersCount / this.props.pagesSize;
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <Users users={this.props.users}
                      pagesSize={this.props.pagesSize}
                      totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage}
                      setUsers={this.props.setUsers}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      setCurrentPage={this.props.setCurrentPage}
        />
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)