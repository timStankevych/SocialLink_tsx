import React from 'react';
import cl from './Users.module.css';
import {UsersType} from '../../redux/usersReducer';

type PropsType = {
    users: UsersType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

let Users = (props: PropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullName: 'Tymofii',
                status: 'hi bro',
                location: {city: 'Bratske', country: 'Ukraine'}
            },
            {
                id: 2,
                followed: false,
                fullName: 'Fima',
                status: 'hi bro',
                location: {city: 'Bratske', country: 'Ukraine'}
            },
            {
                id: 3,
                followed: true,
                fullName: 'Mary',
                status: 'hi bro',
                location: {city: 'Bratske', country: 'Ukraine'}
            },
        ]);
    }

    return (<div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={cl.ava}
                             src="https://i.insider.com/5ebf0f16aee6a826327d9111?width=1100&format=jpeg&auto=webp"
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>);
};


export default Users;