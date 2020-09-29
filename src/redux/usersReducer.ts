import {ActionTypes} from './redux-store';


export type UsersPageActionTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>



export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: {small: any, large: any }
    status: any
    uniqueUrlName: any
}

export type usersPageType = {
    users: UsersType[]
    pagesSize: number
    totalUsersCount: number
    currentPage: number
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const;
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const;
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users}) as const;
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const;
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount}) as const;

let initialState = {
    users: [],
    pagesSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
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
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};

        default:
            return state;
    }
};

export default usersReducer;

