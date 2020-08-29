import React from 'react';
import cl from './Post.module.css'

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={cl.item}>
      <img src="https://klike.net/uploads/posts/2019-02/1550472288_1.jpg" alt="ava" />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;