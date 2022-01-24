import React from "react";
import { connect } from "react-redux";
import { setWeather, toggleIsFetching, updateNewTextSearch, getWeatherThunkCreator} from "../../redux/weather-reducer";
import Main from "./Main";

let mapStateToProps = (state) => {
  return {
    state: state,
    weather: state.weatherPage.weather,
    newTextSearch: state.weatherPage.newTextSearch,
    isFetching: state.weatherPage.isFetching,
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewTextSearch: (newText) => {
//       dispatch(updateNewTextSearchAC(newText))
//     },
//     setWeather: (weather) => {
//       dispatch(setWeatherAC(weather))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }

export default connect(mapStateToProps, {updateNewTextSearch, setWeather, toggleIsFetching, getWeatherThunkCreator})(Main)