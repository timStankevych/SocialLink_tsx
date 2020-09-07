import {ActionTypes, PostType, ProfilePageType} from './store';


const AddPost = 'ADD-POST';
const UpdateNewPostText = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 0, message: "Привет, как дела", likesCount: 10 },
        { id: 1, message: "Что ты такое", likesCount: 88 },
    ],
    newPostsText: '',
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes ) => {
    switch (action.type) {
        case AddPost:
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostsText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostsText = '';
            return state;
        case UpdateNewPostText:
            state.newPostsText = action.newText;
            return state;
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST', newPostsText: newPostText
    } as const
};

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: newText
    } as const
};

export default profileReducer