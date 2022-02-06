import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import { useFormik } from 'formik'
import style from './Main.module.scss'
import Carousel from '../../common/Slider/Slider'

const Main = (props) => {
  
  const getWeather = (data) => {
    props.getWeatherThunkCreator(data)
  }

  if(Object.keys(props.weather).length == 0) {
    getWeather()
  }

  const formik = useFormik({
    initialValues: {
      searchText: '',
    },
    onSubmit: (values) => {
      getWeather(values)
    }
  })
  
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
  
  return(
    <main className={style.main}>
    {props.isFetching ? <Preloader /> : null}
    <section className={style.content}>
      <div className={style.user_location}>Ваш город: {props.weather.location}</div>
      <div className={style.conteiner}>
        <div className={style.weather_panel}>
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
          <Carousel>
            {getForecast(props.weather.forecast)}
          </Carousel>
      </div>
      </div>
    </section>
  </main>

    
  )
}

export default Main