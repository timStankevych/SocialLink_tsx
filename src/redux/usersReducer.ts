import {ActionTypes} from './redux-store';


export type UsersPageActionTypes = ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>


export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: { small: any, large: any }
    status: any
    uniqueUrlName: any
}

export type usersPageType = {
    users: UsersType[]
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


export const follow = (userId: number) => ({type: FOLLOW, userId}) as const;
export const unFollow = (userId: number) => ({type: UNFOLLOW, userId}) as const;
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users}) as const;
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const;
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount}) as const;
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const;

let initialState = {
    users: [],
    pagesSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: false,
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
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        default:
            return state;
    }
};

export default usersReducer;

