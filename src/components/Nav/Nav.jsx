import React from "react";
import style from  './Nav.module.scss'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={style.header__menu}>
        <ul className={style.header__list}>

          <li><NavLink to='/' className={style.header__link} href="#">Ваш город</NavLink></li>
          <li><NavLink  to='/search' className={style.header__link} href="#">Погода в городах</NavLink></li>
          <li><NavLink  to='/about' className={style.header__link} href="#">О проекте</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav