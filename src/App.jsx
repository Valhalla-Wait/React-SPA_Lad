import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react';
import MainConteiner from './components/Main/MainConteiner';
import Footer from './components/Footer/Footer';

 let App = (props) => {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header/>
          <MainConteiner state={props.state}/>
          <Footer/>
          {/* <Route path='/weather' component={Weather}/>
          <Route path='/about' component={About}/> */}
        </div>
      </BrowserRouter>
    )
  }


export default App;
