const axios = require('axios')

const config = require('../config');

async function saveWeather(weather) {
  const data = {
    weather: {
      celsius: weather.celsius,
      fahrenheit: weather.fahrenheit,
      pressure: weather.pressure,
      relativeHumidity: weather.relativeHumidity,
      lightLevel: weather.lightLevel,
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
