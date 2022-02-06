import React from "react";
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__copy}>
        CopyRight 2022 Weather Project on React
      </div>
    </footer>
  )
}

export default Footer