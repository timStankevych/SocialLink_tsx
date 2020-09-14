import React from 'react';
import cl from './MyPosts.module.css'
import Post from './Post/Post';
import {NewPostsTextType, PostType} from '../../../redux/redux-store';

type PropsType = {
    updateNewPostText: (newText: string) => void
    addPost: (text: string) => void
    posts: Array<PostType>
    newPostsText: NewPostsTextType
}

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} key={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        if (newPostElement.current) {
            if (newPostElement.current.value !== '' && newPostElement.current.value !== 'sex') {
                props.addPost(newPostElement.current.value);
            }
        }
    }

    let onPostChange = () => {
        let newText = newPostElement.current ? newPostElement.current.value : '';
        props.updateNewPostText(newText)
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostsText}/><br/>
                <button onClick={onAddPost}>Add post
                </button>
            </div>
            <div className={cl.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;