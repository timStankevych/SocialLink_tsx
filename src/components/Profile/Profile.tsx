import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsoContainer';
import {ProfileType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';

type PropsType = {
    profile: ProfileType
}

let Profile = (props: PropsType) => {

  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;