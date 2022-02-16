import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import style from './SearchWeather.module.scss'
import WeatherSearch from '../../common/WeatherSearch/WeatherSearch'

const SearchWeather = (props) => {
  return(
    <div>
      {
      props.isFetching ? <div className={style.preloader}><Preloader /></div> : 
      <WeatherSearch error={props.error} weather={props.weather} getWeather={props.getWeatherThunkCreator}/>
      } 
  </div>  
  )
}

export default SearchWeather