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
        {props.weather.map( w => 
          <div>
            {w.location},  {w.description},{w.temp} 
          </div>
        )}
      </div>
    </div>
  )
}

export default Main