import MyPosts from './MyPosts';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import {RootStateType} from '../../../redux/store';
import {connect} from 'react-redux';


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostsText: state.profilePage.newPostsText
    };
};
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (newText: string) => {dispatch(updateNewPostTextAC(newText))},
        addPost: (text: string) => {dispatch(addPostAC(text))},
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;