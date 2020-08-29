import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {addPost, ProfilePageType} from '../../redux/state';

type PropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    updateNewPostsText: (newText: string) => void
}

const Profile: React.FC<PropsType> = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
               newPostsText={props.profilePage.newPostsText}
               addPost={addPost}
               updateNewPostsText={props.updateNewPostsText}/>
    </div>
  )
}

export default Profile;