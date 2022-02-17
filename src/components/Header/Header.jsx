import React from "react";
import Nav from "../Nav/Nav";
import style from "./Header.module.scss"

 const Header = () => {
    return (
      <header className={style.header}>
        <div className={style.header__logo}>
        <h1>
          WeatherRRRRRRRRR<br/>
          <span>Monitoring</span>
        </h1>
      </div>
        <Nav />
      </header>
    )
  
}

export default Header