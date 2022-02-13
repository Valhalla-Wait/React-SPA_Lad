import React from "react";
import { connect } from "react-redux";
import { setWeather, toggleIsFetching, getSelfWeatherThunkCreator, getWeatherThunkCreator} from "../../redux/weather-reducer";
import { getFetching, getSelfCity, getWeather } from "../../selectors/weather-selectors";
import Main from "./Main";

let mapStateToProps = (state) => {
  return {
    weather: getWeather(state),
    selfCity: getSelfCity(state),
    isFetching: getFetching(state),
  }
}

export default connect(mapStateToProps, {setWeather, toggleIsFetching, getSelfWeatherThunkCreator})(Main)