import React from "react"

export const getWeather = (state) => {
  return state.weatherPage.weather
}

export const getFetching = (state) => {
  return state.weatherPage.isFetching
}
