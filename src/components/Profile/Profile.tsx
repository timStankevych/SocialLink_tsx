import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionTypes, ProfilePageType} from '../../redux/state';

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

const Profile: React.FC<PropsType> = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
               newPostsText={props.profilePage.newPostsText}
               dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;