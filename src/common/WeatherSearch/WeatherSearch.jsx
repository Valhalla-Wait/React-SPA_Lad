import React from "react";
import { useFormik } from 'formik'
import style from './WeatherSearch.module.scss'
import { BsSearch } from "react-icons/bs";
import Panel from '../Panel/Panel'

const WeatherSearch = (props) => {
  const getWeather = (data) => {
    props.getWeather(data)
    
  }

  const formik = useFormik({
    initialValues: {
      searchText: '',
    },
    onSubmit: (values) => {
      getWeather(values)
    }
  })

  return (
    <section className={style.content}>
          <div className={style.user_location}>
            <div className={style.weather_panel__form}>
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
              </div>
            </div>
            {<Panel error={props.error} weather={props.weather}/>}
          
          
    </section>
  )
}

export default WeatherSearch