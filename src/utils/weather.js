const axios = require('axios')

const config = require('../config');

async function saveWeather() {  
  const data = {
    weather: {
      celsius: '21',
      fahrenheit: '69.8',
      pressure: 'pressure',
      relativeHumidity: 'relativeHumidity',
      lightLevel: 'lightLevel',
      city: 'chicago',
      gps: 'gps',
    }
  }
  const response = await axios.post(`${config.get('api.url')}/weather`, data)
  if (response.status === 200) {
    console.log('report saved :)')
  } else {
    console.log('error... :(')
  }
}

module.exports.saveWeather = saveWeather
