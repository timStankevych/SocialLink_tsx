import {PostType, ProfileType} from './redux-store';
import {profileAPI, usersAPI} from '../api/api';

export type ProfilePageActionTypes = ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>


const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [

        {id: 0, message: 'Привет, как дела', likesCount: 10},
        {id: 1, message: 'Что ты такое', likesCount: 88},
    ],
    newPostsText: '',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action: ProfilePageActionTypes) => {
        switch (action.type) {
            case ADD_POST:
                let newPost: PostType = {
                    id: new Date().getTime(),
                    message: action.newPostText,
                    likesCount: 0,
                };
                return {...state, posts: [...state.posts, newPost], newPostsText: ''};
            case UPDATE_NEW_POST_TEXT:
                return {...state, newPostsText: action.newText};
            case SET_USER_PROFILE:
                return {...state, profile: action.profile};
            case SET_STATUS:
                return {
                    ...state,
                    status: action.status
                };
            default:
                return state;
        }
    }
;

export const addPost = (newPostText: string) => {
    return {type: ADD_POST, newPostText} as const;
};

export const updateNewPostText = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText} as const;
};

export const setUserProfile = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const;
};
export const setStatus = (status: string) => {
    return {type: SET_STATUS, status} as const;
};

export const getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getProfile(userId).then((response: { data: ProfileType; }) => {
            dispatch(setUserProfile(response.data));
        }
    );
};

export const getStatus = (userId: any) => (dispatch: any) => {
    profileAPI.getStatus(userId).then((response: { data: string; }) => {
            dispatch(setStatus(response.data));
        }
    );
};
export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status).then((response: { data: { resultCode: number; }; }) => {
        if(response.data.resultCode === 0)
            dispatch(setStatus(status));
        }
    );
};

export default profileReducer;