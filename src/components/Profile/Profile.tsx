import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../redux/store';
import MyPostsContainer from './MyPosts/Post/MyPostsoContainer';

type PropsType = {
    store: StoreType
}

const Profile: React.FC<PropsType> = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
    </div>
  )
}

export default Profile;