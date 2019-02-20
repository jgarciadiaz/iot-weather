const Particle = require("particle-io");
const five = require("johnny-five");

const { saveWeather } = require('./utils/weather')

function onBoardReady() {
  var temperature = new five.Temperature({
    controller: "HTU21D"
  });

  var hygrometer = new five.Hygrometer({
    controller: "HTU21D"
  });

  temperature.on("change", function() {
    console.log("temperature");
    console.log("  fahrenheit   : ", this.fahrenheit);
    console.log("--------------------------------------");
    saveWeather(this)
  });

  hygrometer.on("change", function() {
    console.log("humidity");
    console.log("  relative humidity : " + this.relativeHumidity + "%");
    console.log("--------------------------------------");
  });
}

async function run() {
  const board = new five.Board({
    io: new Particle({
      token: process.env.PARTICLE_TOKEN,
      deviceId: process.env.PARTICLE_DEVICE_ID
    })
  });

  board.on("ready", onBoardReady);
}

// run()
saveWeather()
