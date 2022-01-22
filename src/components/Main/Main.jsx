import * as axios from 'axios'
import React from 'react'
import getWeather, { weatherAPI } from '../../api/api'
import Preloader from '../../common/Preloader/Preloader'

const Main = (props) => {
  let newTextSearch = React.createRef()
  let search = () => {

  //ЗАПРОС БЕЗ API
  //   let data = newTextSearch.current.value
  //   props.setWeather([
  //     {location: data, description: 'Облачно', temp: -20, img: 'none'},
  // ])


//ЗАПРОС API
    let data = newTextSearch.current.value
    props.toggleIsFetching(true)
      weatherAPI.getWeather(data).then(data => {
            props.setWeather([
              {location: data.location.name, description: data.current.condition.text, temp: data.current.temp_c, img: 'none'},
          ])
          props.toggleIsFetching(false)
          }).catch(function (error) {
            console.error(error);
          });



  }
  
  
  return(
    <div className="weather_panel">
      {props.isFetching ? <Preloader /> : null}
      <input type="text" ref={newTextSearch} />
      <button onClick={search}>Прогноз</button>
      {props.weather.map( w => <div>
        {w.location},  {w.description},{w.temp} 
      </div>)}
      {/* <div className="location">{props.weather.location}</div>
      <div className="desc">{props.weather.description}</div>
      <div className="temp">{props.weather.temp}</div>
      <div className="img">{props.weather.img}</div> */}
    </div>
  )
}

export default Main