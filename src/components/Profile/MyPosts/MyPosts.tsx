import React from 'react';
import cl from './MyPosts.module.css'
import Post from './Post/Post';
import {NewPostsTextType, PostType} from '../../../redux/state';

type PropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
    newPostsText: NewPostsTextType
    updateNewPostsText: (newText: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            if (newPostElement.current.value !== '' && newPostElement.current.value !== 'sex') {
                props.addPost(newPostElement.current.value);
            }
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : '';
        props.updateNewPostsText(text);
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