import React from 'react';
import cl from '../Dialogs.module.css'
import {MessageType} from '../../../redux/state';

type PropsType = {
  message: string
}


const Message: React.FC<PropsType> = (props) => {
  return (
    <div className={cl.dialog}>{props.message}</div>
  )
}


export default Message