import React from "react";
import style from  './Nav.module.scss'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className={style.menu}>
        <li><NavLink to='/weather'>Main</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
      </ul>

    </div>
  )
}

export default Nav