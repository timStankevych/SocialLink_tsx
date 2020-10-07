import React from 'react';
import cl from './Header.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {
  isAuth: boolean
  login: string | null
}

const Header = (props: PropsType) => {
  return <header className={cl.header}>
    <img src="https://iconsplace.com/wp-content/uploads/_icons/40e0d0/256/png/facebook-2-icon-17-256.png" alt="logo"/>
    <div className={cl.loginBlock}>
      {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

    </div>
  </header>
}

export default Header;