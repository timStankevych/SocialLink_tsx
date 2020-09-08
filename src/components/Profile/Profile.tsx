import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsoContainer';


const Profile: React.FC = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;