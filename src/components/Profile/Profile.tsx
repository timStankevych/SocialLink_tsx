import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../redux/redux-store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

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