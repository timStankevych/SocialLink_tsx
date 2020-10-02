import React from 'react';
import {RootStateType} from '../../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow,
    UsersType
} from '../../redux/usersReducer';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

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
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            );
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
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

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   pagesSize={this.props.pagesSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   setUsers={this.props.setUsers}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   setCurrentPage={this.props.setCurrentPage}
            />
        </>;
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};

export default connect(mapStateToProps, {follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersComponent);