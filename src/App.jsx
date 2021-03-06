import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React, { Suspense } from 'react';
import MainConteiner from './components/Main/MainConteiner';
import Footer from './components/Footer/Footer';
import Preloader from './common/Preloader/Preloader';
const SearchWeatherConteiner = React.lazy(() => import('./components/SearchWeather/SearchWeatherConteiner'));
const About = React.lazy(() => import('./components/About/About'));

 let App = (props) => {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className='wrapper'>
          <Header/>
          <main className='main'>
            <div className="content">
              <Routes>
                <Route exact path='/' element={<MainConteiner/>}/>
                <Route exact path='/search' element={
                  <Suspense fallback={<Preloader />}>
                    <SearchWeatherConteiner />
                  </Suspense>
                }/>
                <Route exact path='/about' element={
                  <Suspense fallback={<Preloader />}>
                    <About />
                  </Suspense>
                }/>
              </Routes>
            </div>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }


export default App;
