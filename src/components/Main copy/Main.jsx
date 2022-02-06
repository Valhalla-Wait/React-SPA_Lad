import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import { useFormik } from 'formik'

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
    <main class="main">



    <section class="content">
      <div class="user_location">Ваш город: НН</div>
      <div class="conteiner">
        <div class="weather_panel">
          <div class="weather_panel__result">
            <div class="weather_panel__weather">
              <div class="weather_panel__temp">-10</div>
              <div class="weather_panel__img"><img src="2.png" alt=""></div>
              <div class="weather_panel__desc">Облачно</div>
            </div>
            <div class="weather_panel__detailed">
              <div class="weather_panel__spedd">13km/h</div>
              <div class="weather_panel__water">56%</div>
              <div class="weather_panel__compas">N/W</div>
            </div>
          </div>
          <div class="weather_panel__forecast">
            <button><</button>
            <div class="weather_panel__item">
              <div class="weather_panel__item__time">00:00</div>
              <div class="weather_panel__item__img"><img src="2.png" alt=""></div>
              <div class="weather_panel__item__temp">-12</div>
            </div>
            <div class="weather_panel__item">
              <div class="weather_panel__item__time">01:00</div>
              <div class="weather_panel__item__img"><img src="2.png" alt=""></div>
              <div class="weather_panel__item__temp">-12</div>
            </div>
            <div class="weather_panel__item">
              <div class="weather_panel__item__time">02:00</div>
              <div class="weather_panel__item__img"><img src="2.png" alt=""></div>
              <div class="weather_panel__item__temp">-12</div>
            </div>
            <div class="weather_panel__item">
              <div class="weather_panel__item__time">03:00</div>
              <div class="weather_panel__item__img"><img src="2.png" alt=""></div>
              <div class="weather_panel__item__temp">-12</div>
            </div>
            <div class="weather_panel__item">
              <div class="weather_panel__item__time">04:00</div>
              <div class="weather_panel__item__img"><img src="2.png" alt=""></div>
              <div class="weather_panel__item__temp">-12</div>
            </div>
            <div class="weather_panel__item">
              <div class="weather_panel__item__time">05:00</div>
              <div class="weather_panel__item__img"><img src="2.png" alt=""></div>
              <div class="weather_panel__item__temp">-12</div>
            </div>
            <button>></button>
        </div>
      </div>
      </div>
    </section>
  </main>

    // <div className="weather_panel">
    //   {props.isFetching ? <Preloader /> : null}
    //   <form onSubmit={formik.handleSubmit}>
    //     <input
    //       id='searchText'
    //       name='searchText' 
    //       type="text" 
    //       placeholder='Введите город'
    //       onChange={formik.handleChange}
    //       value={formik.values.searchText}
    //       />
    //       <button type='submit'>Прогноз</button>
    //   </form>

    //   <div className="weather_result">

    //   {props.weather.location}, {props.weather.description}, {props.weather.temp}, <img src={props.weather.img} alt="weather_icon" />
    //   {getForecast(props.weather.forecast)}
    //   </div>
    // </div>
  )
}

export default Main