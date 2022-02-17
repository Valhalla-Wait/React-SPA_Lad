import React from "react";
import style from './Preloader.module.scss'
let Preloader = () => {
  return (
        <div className={style.holder}>
          <div className={style.preloader}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
  )
  
}

export default Preloader