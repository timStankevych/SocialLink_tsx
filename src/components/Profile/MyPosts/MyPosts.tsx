import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../redux/redux-store';
import {reduxForm, Field} from 'redux-form';

type PropsType = {
    addPost: (text: string) => void
    posts: Array<PostType>
    newPostsText: string
}

const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component='textarea'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddPostForm'})(AddNewPostForm);

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}
                                                   key={p.id}/>);

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    };

    return (
        <div>
            My posts
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={cl.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;