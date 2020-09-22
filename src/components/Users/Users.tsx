import React from 'react';
import cl from './Users.module.css';
import * as axios from 'axios';
import {UsersType} from '../../redux/usersReducer';

type PropsType = {
    users: Array<UsersType>
    setUsers: (users: Array<UsersType>) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

class Users extends React.Component<PropsType> {

    componentDidMount() {

        axios.default.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                    this.props.setUsers(response.data.items);
                }
            );
    }

    render(): React.ReactNode {
        return (<div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={cl.ava}
                             src={u.photos.small != null ? u.photos.small : 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_hq.jpg'}
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
                </div>)
            }
        </div>);
    }
}

export default Users;