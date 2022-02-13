import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import style from './Main.module.scss'
import Carousel from '../../common/Slider/Slider'
import { useEffect } from 'react'
import Panel from '../../common/Panel/Panel'

const Main = (props) => {
  
  const getWeather = () => {
    props.getSelfWeatherThunkCreator()
  }
  useEffect(() => {
    
     if(props.selfCity == '') {
      getWeather()
     }
  }, [props.selfCity])

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
    {props.isFetching ? <div className={style.preloader}><Preloader /></div> : 
    <section className={style.content}>
    <div className={style.user_location}>Ваш город: {props.weather.location}</div>
    <div className={style.conteiner}>
      <Panel weather={props.weather}/>
    </div>
  </section>
  }
    
  </main>

    
  )
}

export default Main