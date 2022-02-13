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
    },
    getWeatherOnIP() {
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
    },
}  

