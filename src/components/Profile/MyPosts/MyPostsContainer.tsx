import MyPosts from './MyPosts';
import {addPost} from '../../../redux/profileReducer';
import {RootStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostsText: state.profilePage.newPostsText
    };
};
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (text: string) => {dispatch(addPost(text))},
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;