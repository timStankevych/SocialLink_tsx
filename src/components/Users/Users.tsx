import React from 'react';
import cl from './Users.module.css';
import * as axios from 'axios';
import {UsersType} from '../../redux/usersReducer';

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

class Users extends React.Component<PropsType> {

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

        return (<div>
            <div className={cl.numbers}>
                {pages.map(p => {
                    return (
                        <span className={this.props.currentPage === p ? cl.selectedPage : ''}
                              onClick={() => {
                                  this.onPageChanged(p);
                              }}
                        >{p}</span>
                    );
                })}
            </div>
            {
                this.props.users.map(u => u.photos.small === null ? <div key={u.id}>
                <span>
                    <div>
                        <img className={cl.ava}
                             src={u.photos.large != null ? u.photos.large
                                     : 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_hq.jpg'}
                             alt="avatar"/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                this.props.follow(u.id);
                            }}>FOLLOW</button>
                            : <button onClick={() => {
                                this.props.unFollow(u.id);
                            }}>UNFOLLOW</button>}
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
    }
}

export default Users;