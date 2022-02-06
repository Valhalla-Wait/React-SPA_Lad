import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import { useFormik } from 'formik'
import style from './Main.module.scss'

const Main = (props) => {
  const getWeather = (data) => {
    props.getWeatherThunkCreator(data)
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
    return forecast.map(h => 
      <div key={h.time}>{h.time} | {h.temp_c}</div>
    )
  }
  
  return(
    <main className={style.main}>
      <form onSubmit={formik.handleSubmit}>
         <input
           id='searchText'
          name='searchText' 
           type="text" 
           placeholder='Введите город'
           onChange={formik.handleChange}
           value={formik.values.searchText}
           />
          <button type='submit'>Прогноз</button>
       </form>
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
              <div className={style.weather_panel__spedd}>Скорость ветра: {props.weather.wind_speed} миль/ч</div>
              <div className={style.weather_panel__water}>Влажность: {props.weather.humidity}%</div>
              <div className={style.weather_panel__compas}>Ощущается как: {props.weather.feelslike}</div>
            </div>
          </div>
          {/* <div className="weather_panel__forecast">
            <button>{'<'}</button>
            <div className="weather_panel__item">
              <div className="weather_panel__item__time">00:00</div>
              <div className="weather_panel__item__img"><img src="2.png" alt=""/></div>
              <div className="weather_panel__item__temp">-12</div>
            </div>
            <div className="weather_panel__item">
              <div className="weather_panel__item__time">01:00</div>
              <div className="weather_panel__item__img"><img src="2.png" alt=""/></div>
              <div class="weather_panel__item__temp">-12</div>
            </div>
            <div class="weather_panel__item">
              <div class="weather_panel__item__time">02:00</div>
              <div class="weather_panel__item__img"><img src="2.png" alt=""/></div>
              <div class="weather_panel__item__temp">-12</div>
            </div>
            <div class="weather_panel__item">
              <div class="weather_panel__item__time">03:00</div>
              <div class="weather_panel__item__img"><img src="2.png" alt=""/></div>
              <div class="weather_panel__item__temp">-12</div>
            </div>
            <div class="weather_panel__item">
              <div class="weather_panel__item__time">04:00</div>
              <div class="weather_panel__item__img"><img src="2.png" alt=""/></div>
              <div class="weather_panel__item__temp">-12</div>
            </div>
            <div class="weather_panel__item">
              <div class="weather_panel__item__time">05:00</div>
              <div class="weather_panel__item__img"><img src="2.png" alt=""/></div>
              <div class="weather_panel__item__temp">-12</div>
            </div>
            <button>{'>'}</button>
        </div> */}
      </div>
      </div>
    </section>
  </main>

    
  )
}

export default Main