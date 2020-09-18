import {ActionTypes} from './redux-store';


export type UsersPageActionTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>

// type LocationType = {
//     city: string
//     country: string
// }
// export type UsersType = {
//     id: number
//     followed: boolean
//     fullName: string
//     status: string
//     photos: any
//     location: LocationType
// }

export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: any
    status: any
    uniqueUrlName: any
}

export type usersPageType = {
    users: UsersType[]
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const;
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const;
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users}) as const;

let initialState = {
    users: [],
};

const usersReducer = (state: usersPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};

        default:
            return state;
    }
};

export default usersReducer;

