import { weatherAPI } from './../api/api'
const SET_WEATHER = 'SET_WEATHER'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_SELF_CITY = 'SET_SELF_CITY'

let initialState = {
  weather: {},
  selfCity: '',
  isFetching: false,  
  followingInProgress: false,
  forecast: [],
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER: {
      return {...state, weather: {...action.weather}, selfCity: action.weather.location.name}
    }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case SET_SELF_CITY:
      return {
        ...state,
        selfCity: action.selfCity
      }
    default:
      return state
  }
}

export const setWeather = (weather) => ({type: SET_WEATHER, weather})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setSelfCity = (selfCity) => ({type: SET_SELF_CITY, selfCity})

export const getSelfWeatherThunkCreator = () => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await weatherAPI.getWeatherOnIP()
    let data = await weatherAPI.getWeather(response.city)
        dispatch(setWeather(
          {location: data.location.name, description: data.current.condition.text, temp: data.current.temp_c, img: data.current.condition.icon, feelslike: data.current.feelslike_c, humidity: data.current.humidity, wind_speed: data.current.wind_kph, forecast: data.forecast.forecastday[0].hour, selfCity: data.location.name},
        ))
        dispatch(setSelfCity(data.location.name))
        dispatch(toggleIsFetching(false))
  }

export const getWeatherThunkCreator = (location) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
     let data = await weatherAPI.getWeather(location)
        dispatch(setWeather(
          {location: data.location.name, description: data.current.condition.text, temp: data.current.temp_c, img: data.current.condition.icon, feelslike: data.current.feelslike_c, humidity: data.current.humidity, wind_speed: data.current.wind_kph, forecast: data.forecast.forecastday[0].hour, selfCity: ''},
        ))
        dispatch(setSelfCity(''))
        dispatch(toggleIsFetching(false))

  }



export default weatherReducer