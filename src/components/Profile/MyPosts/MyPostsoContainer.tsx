import React from 'react';
import MyPosts from './MyPosts';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';


const MyPostsContainer: React.FC = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
            let state = store.getState().profilePage

            let addPost = (text: string) => {
                store.dispatch(addPostAC(text));
            }

            let onPostChange = (newText: string) => {
                store.dispatch(updateNewPostTextAC(newText));
            }
            return (
                <MyPosts updateNewPostText={onPostChange}
                         addPost={addPost}
                         posts={state.posts}
                         newPostsText={state.newPostsText}/>)
        }}
        </StoreContext.Consumer>
    );
}
export default MyPostsContainer;