import React from "react";
import style from  './Nav.module.scss'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={style.header__menu}>
        <ul className={style.header__list}>
          <li><a className={style.header__link} href="#">Ваш город</a></li>
          <li><a className={style.header__link} href="#">Погода в городах</a></li>
          <li><a className={style.header__link} href="#">О приложении</a></li>
        </ul>
    </nav>
  )
}

export default Nav