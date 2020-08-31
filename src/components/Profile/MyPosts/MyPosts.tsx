import React from 'react';
import cl from './MyPosts.module.css'
import Post from './Post/Post';
import {ActionTypes, addPostAC, NewPostsTextType, PostType, updateNewPostTextAC} from '../../../redux/state';

type PropsType = {
    posts: Array<PostType>
    newPostsText: NewPostsTextType
    dispatch: (action: ActionTypes) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            if (newPostElement.current.value !== '' && newPostElement.current.value !== 'sex') {
               let newPostText=newPostElement.current.value
                props.dispatch(addPostAC(newPostText));
            }
        }
    }

    let onPostChange = () => {
        let newText = newPostElement.current ? newPostElement.current.value : '';
        props.dispatch(updateNewPostTextAC(newText));
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostsText}/><br/>
                <button onClick={addPost}>Add post
                </button>
            </div>
            <div className={cl.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;