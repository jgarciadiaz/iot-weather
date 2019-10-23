const Particle = require("particle-io");
const five = require("johnny-five");

const { saveWeather } = require('./utils/weather')

const config = require('./config');

function onBoardReady() {
  const temperature = new five.Temperature({
    controller: "HTU21D",
    freq: 1000 * 1
  });

  temperature.on("change", function() {
    console.log("temperature");
    console.log("\tfahrenheit   : ", this.fahrenheit);
    console.log("\tcelsius   : ", this.celsius);
    console.log("--------------------------------------");
    saveWeather(this)
  });
}

async function run() {
  const board = new five.Board({
    io: new Particle({
      token: config.get("token"),
      deviceId: config.get("deviceId"),
    })
  });

  board.on("ready", onBoardReady);
}

// run()
const mockData = {
  celsius: '21',
  fahrenheit: '69.8',
  pressure: 'pressure',
  relativeHumidity: 'relativeHumidity',
  lightLevel: 'lightLevel'
}

saveWeather(mockData)
