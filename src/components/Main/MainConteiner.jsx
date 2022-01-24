import React from "react";
import { connect } from "react-redux";
import { setWeather, toggleIsFetching, updateNewTextSearch, getWeatherThunkCreator} from "../../redux/weather-reducer";
import { getFetching, getNewTextSearch, getWeather } from "../../selectors/weather-selectors";
import Main from "./Main";

let mapStateToProps = (state) => {
  return {
    weather: getWeather(state),
    newTextSearch: getNewTextSearch(state),
    isFetching: getFetching(state),
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