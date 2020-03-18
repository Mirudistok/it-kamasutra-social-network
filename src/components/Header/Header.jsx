import React from 'react'
import s from './Header.module.css'
import { NavLink, Redirect } from 'react-router-dom'

const Header = (props) => {

  return (
    <header className={s.header}>
      <div className={s.header__img}>
        <img src="https://cdn3.iconfinder.com/data/icons/abstract-tree-wood-forest-ecology-landscape-eco-gr/1470/red_crab_logo_animal-512.png" />
      </div>
      <div className={s.header__BoxLogin}>
        {props.isAuth
          ? <div>
            <div className={s.header__login}>{props.login}</div>
            {/* <div>{props.login}</div> */}
            <div className={s.header__login} onClick={props.logout}>Logout</div>
          </div>
          : <NavLink to="/login" className={s.header__login}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;