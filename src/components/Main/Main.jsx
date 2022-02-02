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
    <div className="weather_panel">
      {props.isFetching ? <Preloader /> : null}
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

      <div className="weather_result">

      {props.weather.location}, {props.weather.description}, {props.weather.temp}, <img src={props.weather.img} alt="weather_icon" />
      {console.log(props.weather.forecast)}
      {getForecast(props.weather.forecast)}

      {/* {props.weather.forecast.map(h => 
          <div key={h.time.toString()}>{h.time}, {h.temp_c}</div>
        )} */}
      </div>
    </div>
  )
}

export default Main