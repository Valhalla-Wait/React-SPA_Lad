import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react';
import * as axios from 'axios'
import MainConteiner from './components/Main/MainConteiner';

// let App = () => {
//   // componentDidMount() {
//   //   options = {
//   //     method: 'GET',
//   //     url: 'http://api.weatherapi.com/v1/current.json',
//   //     params: {q: 'Moscow', lang: 'ru'},
//   //     headers: {
//   //       'key': '1055aa5b43174f4981c171459221601'
//   //     }
//   //   },
    
//   //   axios.request(options).then(function (response) {
//   //     console.log(typeof response.data.location.name)
//   //     city = response.data.location.name
//   //     descr = response.data.current.condition.text
//   //     temp = response.data.current.condition.temp_c
//   //     console.log(city)
//   //   }).catch(function (error) {
//   //     console.error(error);
//   //   });
//   // }
//   return (
//     <BrowserRouter>
//       <Header/>
//       {/* <Route path='/weather' component={Weather}/>
//       <Route path='/about' component={About}/> */}
//     </BrowserRouter>
//   )
// }
class App extends React.Component {
  //  componentDidMount() {
  //   const options = {
  //     method: 'GET',
  //     url: 'http://api.weatherapi.com/v1/current.json',
  //     params: {q: 'Moscow', lang: 'ru'},
  //     headers: {
  //       'key': '1055aa5b43174f4981c171459221601'
  //     }
  //   }
  //   axios.request(options).then(function (response) {
  //     let city = response.data.location.name
  //     let descr = response.data.current.condition.text
  //     let temp = response.data.current.temp_c
  //     console.log(city, descr, temp)
  //     console.log(response)
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }
  
  render() {
    
    return(
      <BrowserRouter>
      <Header/>
      <MainConteiner state={this.props.state}/>
      {/* <Route path='/weather' component={Weather}/>
      <Route path='/about' component={About}/> */}
    </BrowserRouter>
    )
  }
}

export default App;
