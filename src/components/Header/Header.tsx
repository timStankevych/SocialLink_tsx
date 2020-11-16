import React from 'react';
import cl from './Header.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {
  isAuth: boolean
  login: string | null
  logout: any
}

const Header = (props: PropsType) => {
  return <header className={cl.header}>
    <img src="https://iconsplace.com/wp-content/uploads/_icons/40e0d0/256/png/facebook-2-icon-17-256.png" alt="logo"/>
    <div className={cl.loginBlock}>
      {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}

    </div>
  </header>
}

export default Header;