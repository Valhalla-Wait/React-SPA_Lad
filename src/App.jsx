import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react';
import MainConteiner from './components/Main/MainConteiner';
import Footer from './components/Footer/Footer';
import SearchWeatherConteiner from './components/SearchWeather/SearchWeatherConteiner';
import About from './components/About/About';

 let App = (props) => {
    return (
      <BrowserRouter>
        <div className='wrapper'>
          <Header/>
          <main className='main'>
            <div className="content">
              <Routes>
                <Route path='/' element={<MainConteiner state={props.state}/>}/>
                <Route path='/search' element={<SearchWeatherConteiner />}/>
                <Route path='/about' element={<About />}/>
              </Routes>
            </div>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }


export default App;
