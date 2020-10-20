import React from 'react';
import {RootStateType} from '../../redux/redux-store';
import {
    setCurrentPage, toggleFollowingInProgress,
    UsersType, getUsers, setUsers, unFollow, follow
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { connect } from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type PropsType = {
    users: Array<UsersType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    toggleFollowingInProgress: (isFetching: boolean, userId: number ) => void
    followingInProgress: Array<any>
    getUsers: (currentPage: number, pagesSize: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pagesSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pagesSize)
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
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress
    };
};

export default compose(
    connect(mapStateToProps, {setCurrentPage, toggleFollowingInProgress,
        getUsers, follow, unFollow, setUsers})
)(UsersContainer)