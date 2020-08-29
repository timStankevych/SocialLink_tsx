import React from 'react';
import cl from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import { DialogType} from "../../../redux/state";

type PropsType = {
    id: number
    name: string
}

const DialogItem: React.FC<PropsType> = (props) => {

  let path = "/dialogs/" + props.id

  return (
    <div className={cl.dialog}>
      <NavLink to={path} activeClassName={cl.active}> {props.name}</NavLink>
    </div>
  )
}


export default DialogItem