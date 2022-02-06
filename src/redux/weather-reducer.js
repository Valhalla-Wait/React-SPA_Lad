import { weatherAPI } from './../api/api'
const SET_WEATHER = 'SET_WEATHER'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
  weather: {},
  isFetching: false,  
  followingInProgress: false,
  forecast: [],
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER: {
      return {...state, weather: {...action.weather}}
    }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
}

export const setWeather = (weather) => ({type: SET_WEATHER, weather})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getWeatherThunkCreator = (location) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    weatherAPI.getWeatherOnIP(location).then(data => {
      weatherAPI.getWeather(data.city).then(data => {
        dispatch(setWeather(
          {location: data.location.name, description: data.current.condition.text, temp: data.current.temp_c, img: data.current.condition.icon, feelslike: data.current.feelslike_c, humidity: data.current.humidity, wind_speed: data.current.wind_kph, forecast: data.forecast.forecastday[0].hour},
        ))
        dispatch(toggleIsFetching(false))
      })
      }).catch(function (error) {
        console.error(error);
      });
  }
  

}


export default weatherReducer