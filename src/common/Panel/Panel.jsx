import React from "react";
import WeatherResult from "./WeatherResult/WeatherResult";
import style from './Panel.module.scss'

const Panel = (props) => {
  return (
    <div className={style.conteiner}>
        <div className={style.weather_panel}>
         {props.error == 1006 ? 
            <div className={style.weather_panel__result}>
              <div className={style.weather_panel__error}>
                Город не найден<br />Проверьте правильность данных
              </div>
            </div> : Object.keys(props.weather).length == 0 ? null : <WeatherResult weather={props.weather}/>
          }
        </div>
      </div>
  )
}

export default Panel