import React from 'react';
import cl from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/redux-store';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }
  return (
    <div >
      <div>
        <img src="https://www.cjnews.com/wp-content/uploads/2020/03/Tower-of-David-Museum-f.jpg" alt="img" />
        </div>
      <div className={cl.descriptionBlock}>
        {/*  <img src={props.profile.photos.large} alt="user photo"/>*/}
        {/*<div>{props.profile.aboutMe}</div>*/}
        <div>{props.profile.fullName}</div>
        {/*<div>{props.profile.lookingForAJobDescription}</div>*/}
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
    </div>
  )
}

export default ProfileInfo;