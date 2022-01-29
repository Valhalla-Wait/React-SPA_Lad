import React from "react";
import Nav from "../Nav/Nav";
import * as axios from 'axios'



 const Header = () => {
  // const options = {
  //       method: 'GET',
  //       url: 'http://api.weatherapi.com/v1/current.json',
  //       params: {q: 'Нижний Новгород', lang: 'ru'},
  //       headers: {
  //         'key': '1055aa5b43174f4981c171459221601'
  //       }
  //     }
  //   axios.request(options).then(function (response) {
  //     let city = response.data.location.name
  //     let descr = response.data.current.condition.text
  //     let temp = response.data.current.temp_c
  //     console.log(city, descr, temp)
  //     console.log(response)
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
    return (
      <header>
        <div className="logo">ЛОГОТИП</div>
        <Nav></Nav>
      </header>
    )
  
}

export default Header