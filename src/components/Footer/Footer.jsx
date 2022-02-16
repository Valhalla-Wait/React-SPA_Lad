import React from "react";
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__title}>
        Weather Project on React
      </div>
      <div className={style.footer__desc}>
        For practic in LAD 2022 &#169;
      </div>
    </footer>
  )
}

export default Footer