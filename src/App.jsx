import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react';
import MainConteiner from './components/Main/MainConteiner';
import Footer from './components/Footer/Footer';
import SearchWeatherConteiner from './components/SearchWeather/SearchWeatherConteiner';

 let App = (props) => {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header/>
          {/* <MainConteiner state={props.state}/> */}
            <Routes>
              <Route path='/self' element={<MainConteiner state={props.state}/>}/>
              <Route path='/search' element={<SearchWeatherConteiner />}/>
            </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }


export default App;
