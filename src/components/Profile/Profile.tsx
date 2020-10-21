import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

let Profile = (props: PropsType) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} updateStatus={props.updateStatus} status={props.status}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;