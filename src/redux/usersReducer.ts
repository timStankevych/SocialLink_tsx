import {usersAPI} from '../api/api';


export type UsersPageActionTypes = ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingInProgress>

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
    followingInProgress: Array<any>
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


export const followSuccess = (userId: number) => ({type: FOLLOW, userId}) as const;
export const unFollowSuccess = (userId: number) => ({type: UNFOLLOW, userId}) as const;
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users}) as const;
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const;
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount}) as const;
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const;
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
}) as const;

let initialState = {
    users: [],
    pagesSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state: usersPageType = initialState, action: UsersPageActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    }
};

export const getUsers = (currentPage: number, pagesSize: number) => {
    return (dispatch: any) => {

        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pagesSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(toggleIsFetching(false));
                dispatch(setTotalUsersCount(data.totalCount));
            })
            .catch(error => {
                dispatch(toggleIsFetching(false));
                console.log(error);
            });
    };
};
export const follow = (userId: number) => {

    return (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingInProgress(false, userId));
            });
    };
};
export const unFollow = (userId: number) => {

    return (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, userId));
        usersAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId));
                }
                dispatch(toggleFollowingInProgress(false, userId));
            });
    };
};

export default usersReducer;

