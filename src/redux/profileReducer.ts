import {ActionTypes, PostType, ProfileType} from './redux-store';

export type ProfilePageActionTypes = ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>


const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [

        {id: 0, message: 'Привет, как дела', likesCount: 10},
        {id: 1, message: 'Что ты такое', likesCount: 88},
    ],
    newPostsText: '',
    profile: null,
};

const profileReducer = (state = initialState , action: ActionTypes) => {
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
            return {...state, profile: action.profile}
        default:
            return state;
        }
    }
    ;

    export const addPost = (newPostText: string) => {
        return {type: 'ADD_POST', newPostText} as const;
    };

    export const updateNewPostText = (newText: string) => {
        return {type: 'UPDATE_NEW_POST_TEXT', newText} as const;
    };

    export const setUserProfile = (profile: ProfileType) => {
        return{type: 'SET_USER_PROFILE', profile} as const;
    }

    export default profileReducer;