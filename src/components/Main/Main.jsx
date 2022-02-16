import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import style from './Main.module.scss'
import { useEffect } from 'react'
import Panel from '../../common/Panel/Panel'

const Main = (props) => {
  
  const getWeather = () => {
    props.getSelfWeatherThunkCreator()
  }
  useEffect(() => {
    
     if(props.selfCity == '') {
      getWeather()
     }
  }, [props.selfCity])
  
  return(
    <div>
      {props.isFetching ? 
        <div className={style.preloader}><Preloader /></div> : Object.keys(props.weather).length == 0? null :
          <section className={style.content}>
          <div className={style.conteiner}>
            <Panel weather={props.weather}/>
          </div>
          </section>
      }
    </div>
  )
}

export default Main