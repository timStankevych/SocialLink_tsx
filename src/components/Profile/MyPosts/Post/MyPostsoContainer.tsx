import React from 'react';
import MyPosts from '../MyPosts';
import {addPostAC, updateNewPostTextAC} from '../../../../redux/profileReducer';
import {StoreType} from '../../../../redux/store';

type PropsType = {
    store: StoreType
}

const MyPostsContainer: React.FC<PropsType> = (props) => {

    let state = props.store.getState().profilePage

    let addPost = (text: string) => {
        props.store.dispatch(addPostAC(text));
    }

    let onPostChange = (newText: string) => {
        props.store.dispatch(updateNewPostTextAC(newText));
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.posts}
                     newPostsText={state.newPostsText}/>);
}
export default MyPostsContainer;