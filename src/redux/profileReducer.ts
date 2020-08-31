import {ActionTypes, PostType, ProfilePageType} from './state';

const AddPost = 'ADD-POST';
const UpdateNewPostText = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: ProfilePageType, action: ActionTypes ) => {
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

export default profileReducer