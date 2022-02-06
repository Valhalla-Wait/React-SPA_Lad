import * as axios from 'axios'

export const weatherAPI = {
    getWeather(data) {
        //instance query
        const instance = axios.create({
            baseURL: 'http://api.weatherapi.com/v1/',
            params: {q: data, lang: 'ru'},
            headers: {
              'key': '1055aa5b43174f4981c171459221601'
            }
        })
        return instance.get('forecast.json').then(response => {
            return response.data
        })
    
        //default query (old)
        // const options = {
        //     method: 'GET',
        //     url: 'http://api.weatherapi.com/v1/current.json',
        //     params: {q: data, lang: 'ru'},
        //     headers: {
        //       'key': '1055aa5b43174f4981c171459221601'
        //     }
        //   }
        // return axios.request(options).then(response => {
        //     return response.data
        // })
    },
    getWeatherOnIP(data) {
        //instance query
        const instance = axios.create({
            baseURL: 'http://api.weatherapi.com/v1/',
            params: {q: 'auto:ip', lang: 'ru'},
            headers: {
              'key': '1055aa5b43174f4981c171459221601'
            }
        })
        return instance.get('ip.json').then(response => {
            return response.data
        })
    
        //default query (old)
        // const options = {
        //     method: 'GET',
        //     url: 'http://api.weatherapi.com/v1/current.json',
        //     params: {q: data, lang: 'ru'},
        //     headers: {
        //       'key': '1055aa5b43174f4981c171459221601'
        //     }
        //   }
        // return axios.request(options).then(response => {
        //     return response.data
        // })
    },
}  

