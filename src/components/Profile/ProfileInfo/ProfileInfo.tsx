import React from 'react';
import cl from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div >
      <div>
        <img src="https://www.cjnews.com/wp-content/uploads/2020/03/Tower-of-David-Museum-f.jpg" alt="img" />
        </div>
      <div className={cl.descriptionBlock}>
        ava + description
    </div>
    </div>
  )
}

export default ProfileInfo;