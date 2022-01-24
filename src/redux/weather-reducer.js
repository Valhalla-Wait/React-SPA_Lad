import { weatherAPI } from './../api/api'
const GET_WEATHER = 'GET_WEATHER'
const UPDATE_NEW_TEXT_SEARCH = 'UPDATE_TEXT_SEARCH'
const SET_WEATHER = 'SET_WEATHER'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
  weather: [],
  isFetching: false,  
  followingInProgress: false,
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_WEATHER: 
    //   let query = {
    //     location: state.newText,
    //     description: state.description,
    //     temp: state.temp,
    //     img: state.img,
    //   }
    //   return {
    //     ...state,
    //     weather: [...state.weather, query]
    //   }
    case SET_WEATHER: {
      return {...state, weather: [...action.weather]}
    }
      
    case UPDATE_NEW_TEXT_SEARCH:
      return {
        ...state,
        newTextSearch: action.newText
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

// export const getWeather = (location) => ({type: GET_WEATHER, location})
export const updateNewTextSearch = (newText) => ({type: UPDATE_NEW_TEXT_SEARCH, newText})
export const setWeather = (weather) => ({type: SET_WEATHER, weather})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getWeatherThunkCreator = (location) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    weatherAPI.getWeather(location).then(data => {
        dispatch(setWeather([
          {location: data.location.name, description: data.current.condition.text, temp: data.current.temp_c, img: 'none'},
        ]))
      dispatch(toggleIsFetching(false))
      }).catch(function (error) {
        console.error(error);
      });
  }
  

}


export default weatherReducer