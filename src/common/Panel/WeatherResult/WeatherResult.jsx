import React from "react";
import style from './WeatherResult.module.scss'
import Slider from "./Slider/Slider";

const WeatherResult = (props) => {
  const getForecast = (forecast) => {
    if(!forecast){
      return
    }
    for (let i = 0; i < forecast.length; i++) {
      let hour = forecast[i].time
      hour = hour.match(/\d\d:\d\d/).toString()
      forecast[i].time = hour
    }
    return forecast.map(item => 
      <div key={item.time} className={style.weather_panel__item}>
                <div className={style.weather_panel__item__time}>{item.time}</div>
                <div className={style.weather_panel__item__img}><img src={item.condition.icon} alt="icon"/></div>
                <div className={style.weather_panel__item__temp}>{item.temp_c}</div>
              </div>
    )
  }

  return (
              <div>
                <div className={style.weather_panel__location}>{props.weather.location}</div>
                  <div className={style.weather_panel__result}>
                  <div className={style.weather_panel__weather}>
                    <div className={style.weather_panel__temp}>{props.weather.temp}</div>
                    <div className={style.weather_panel__img}><img src={props.weather.img} alt="weather_icon"/></div>
                    <div className={style.weather_panel__desc}>{props.weather.description}</div>
                  </div>
                  <div className={style.weather_panel__detailed}>
                    <div className={style.weather_panel__spedd}>Скорость ветра: {props.weather.wind_speed} км/ч</div>
                    <div className={style.weather_panel__water}>Влажность: {props.weather.humidity}%</div>
                    <div className={style.weather_panel__compas}>Ощущается как: {props.weather.feelslike}</div>
                  </div>
                </div>
                <Slider>
                  {getForecast(props.weather.forecast)}
                </Slider>
              </div>
  )
}

export default WeatherResult