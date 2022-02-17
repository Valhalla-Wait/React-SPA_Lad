import React from "react";
import style from './About.module.scss'

const About = (props) => {
  return (
    <div className={style.conteiner}>
      <div className={style.title}><h2>Weather Monitoring</h2></div>
      <div className={style.description}>
        <p>Weather Monitoring - SPA для просмотра погоды в различных городах мира.</p>
        <br />
        <p>Использовались:</p>
        <ul>
          <li>React</li>
          <li>Функциональные компоненты, Hooks</li>
          <li>Модульные стили или styled-components</li>
          <li>роутинг React-router-dom</li>
          <li>Redux. Асинхронные экшены Redux-thunk</li>
          <li>React.lazy, React.Suspense</li>
          <li>Formik</li>
          <li>Sass</li>
          <li>Axios</li>
          <li>API: <a href="https://www.weatherapi.com/">WeatherApi</a></li>
        </ul>
        <p>Проект был создан в рамках 2 этапа отбора на стажировку IT-компании <a href="https://lad24.ru/">.Lad</a></p>
      </div>
      
    </div>
  )
}

export default About