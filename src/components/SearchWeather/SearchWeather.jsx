import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import { useFormik } from 'formik'
import Carousel from '../../common/Slider/Slider'
import style from './SearchWeather.module.scss'
import { BsSearch } from "react-icons/bs";
import Panel from '../../common/Panel/Panel'

const SearchWeather = (props) => {
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
    {props.isFetching ? <div className={style.preloader}><Preloader /></div> : <section className={style.content}>
      <div className={style.user_location}> <div className={style.weather_panel__form}>
            <form onSubmit={formik.handleSubmit}>
              <input
                id='searchText'
                name='searchText' 
                type="text" 
                placeholder='Введите город'
                onChange={formik.handleChange}
                value={formik.values.searchText}
                />
              <button type='submit'><BsSearch size={30}/></button>
            </form>
          </div></div>
      {!Object.keys(props.weather).length == 0 ? <Panel weather={props.weather}/> : null}   
      
    </section>}
    
  </main>
     
  )
}

export default SearchWeather