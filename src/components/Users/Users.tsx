import React from 'react';
import cl from './Users.module.css';
import axios from 'axios';
import {UsersType} from '../../redux/usersReducer';
import {NavLink} from 'react-router-dom';

type PropsType = {
    users: Array<UsersType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    setUsers: (users: Array<UsersType>) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<any>
}

let Users = (props: PropsType) => {

    let onPageChanged = (pageNumber: number) => {
        props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pagesSize}`)
            .then(response => {
                    props.setUsers(response.data.items);
                }
            );
    };

    let pagesCount = props.totalUsersCount / props.pagesSize;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (<div>
        <div className={cl.numbers}>
            {pages.map(p => {
                return (
                    <span className={props.currentPage === p ? cl.selectedPage : ''}
                          onClick={() => {
                              onPageChanged(p);
                          }}
                    >{p}</span>
                );
            })}
        </div>
        {
            props.users.map(u => u.photos.small === null ? <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={cl.ava}
                             src={u.photos.large != null ? u.photos.large
                                 : 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_hq.jpg'}
                             alt="avatar"/>
                             </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {props.unFollow(u.id)}}>UNFOLLOW</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.follow(u.id)}}>FOLLOW</button>}
                            </div>
                            </span>
                <span>
                            <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            </span>
                            <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                            </span>
                            </span>
            </div> : null)
        }
    </div>);
};

export default Users;