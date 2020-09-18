import React from 'react';
import cl from './Users.module.css';
import {UsersType} from '../../redux/usersReducer';
import * as axios from 'axios';
import {debuglog} from 'util';

type PropsType = {
    users: UsersType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

let Users = (props: PropsType) => {

    if (props.users.length === 0) {

        axios.default.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                    props.setUsers(response.data.items);
                }
            );

        // props.setUsers([
        //     {
        //         id: 1,
        //         followed: true,
        //         fullName: 'Tymofii',
        //         status: 'hi bro',
        //         location: {city: 'Bratske', country: 'Ukraine'}
        //     },
        //     {
        //         id: 2,
        //         followed: false,
        //         fullName: 'Fima',
        //         status: 'hi bro',
        //         location: {city: 'Bratske', country: 'Ukraine'}
        //     },
        //     {
        //         id: 3,
        //         followed: true,
        //         fullName: 'Mary',
        //         status: 'hi bro',
        //         location: {city: 'Bratske', country: 'Ukraine'}
        //     },
        // ]);
    }

    return (<div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={cl.ava}
                             src={u.photos.small != null ? u.photos.small : 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_hq.jpg'}
                             alt="avatar"/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.follow(u.id);
                            }}>FOLLOW</button>
                            : <button onClick={() => {
                                props.unFollow(u.id);
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
};


export default Users;